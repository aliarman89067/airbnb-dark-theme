import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import download from "image-downloader";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
// Libraries Import Here
import UserModel from "./models/User.js";
import PlaceModel from "./models/Place.js";
import { rejects } from "assert";
import BookingModel from "./models/Booking.js";
// Models Import Here

// Creating __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("App is running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Mongo Connection Error " + err);
  });
const salt = bcrypt.genSaltSync(10);
const jwtSecret = "sadskakjdslakdsladka";

// User Photo Api
const multerDest = multer({ dest: "uploads/" });
app.post("/upload", multerDest.single("photo"), (req, res) => {
  const { filename, originalname, path } = req.file;
  const parts = originalname.split(".");
  const newFileName = "uploads/" + filename + "." + parts[1];
  fs.renameSync(path, newFileName);
  res.json(newFileName.replace("uploads/", ""));
});
// Registration Api
app.post("/register", async (req, res) => {
  res.cookie("token", "");
  const {
    name: userName,
    email: userEmail,
    password: userPassword,
    photo: userPhoto,
  } = req.body;
  const findUser = await UserModel.findOne({ email: userEmail });
  if (findUser) {
    res.json("duplicate email");
  } else {
    const hashPassword = bcrypt.hashSync(userPassword, salt);
    const userDoc = await UserModel.create({
      name: userName,
      email: userEmail,
      password: hashPassword,
      photo: userPhoto,
    });
    jwt.sign(
      {
        id: userDoc._id,
        name: userDoc.name,
        email: userDoc.email,
        photo: userDoc.photo,
      },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token);
      }
    );
    const { name, photo, email } = await UserModel.findOne({
      email: userEmail,
    });
    res.json({ name, photo, email });
  }
});

//Jwt Global Promise
function jwtGlobalCookie(token) {
  return new Promise((resolve, rejects) => {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, photo } = await UserModel.findById(userData.id);
      res.json({ name, email, photo });
    });
  } else {
    res.json(null);
  }
});
app.post("/logout", async (req, res) => {
  res.cookie("token", "").json("token deleted");
});
app.post("/login", async (req, res) => {
  const { email: userEmail, password } = req.body;
  const userDoc = await UserModel.findOne({ email: userEmail });
  if (userDoc) {
    const { name, email, photo } = userDoc;
    const userPassword = await bcrypt.compareSync(password, userDoc.password);
    if (userPassword) {
      jwt.sign(
        { id: userDoc._id, name: userDoc.name, email: userDoc.email },
        jwtSecret,
        {},
        async (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({ name, email, photo });
        }
      );
    } else {
      res.json("user not found");
    }
  } else {
    res.json("user not found");
  }
});
app.post("/photo-link", async (req, res) => {
  const { link } = req.body;
  const filename = "photo" + Date.now() + ".jpg";
  await download.image({
    url: link,
    dest: __dirname + "/uploads/" + filename,
  });
  res.json(filename);
});
app.post("/upload-photo", multerDest.array("photos", 100), async (req, res) => {
  let imageArr = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const newPath = path + "." + parts[1];
    fs.renameSync(path, newPath);
    imageArr.push(newPath.replace("uploads", ""));
  }
  res.json(imageArr);
});
app.post("/place", async (req, res) => {
  const {
    title,
    address,
    photos,
    description,
    placeOffers,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;
  const { token } = req.cookies;
  const userData = await jwtGlobalCookie(token);
  await PlaceModel.create({
    owner: userData.id,
    title,
    address,
    photos,
    description,
    placeOffers,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
    date: Date.now(),
  });
  res.json("Place Added");
});
app.get("/places", async (req, res) => {
  const { token } = req.cookies;
  const { id } = await jwtGlobalCookie(token);
  const placesDoc = await PlaceModel.find({ owner: id });
  res.json(placesDoc);
});
app.post("/place-by/:id", async (req, res) => {
  const { id } = req.params;
  const placeDoc = await PlaceModel.find({ _id: id });
  res.json(...placeDoc);
});
app.put("/place", async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    address,
    photos,
    description,
    placeOffers,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;
  const placeDoc = await PlaceModel.findById(id);
  const userDoc = await jwtGlobalCookie(token);
  if (userDoc.id === placeDoc.owner.toString()) {
    await placeDoc.set({
      title,
      address,
      photos,
      description,
      placeOffers,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    });
    await placeDoc.save();
    res.json("place updated");
  } else {
    res.json(null);
  }
});
app.post("/delete-place/:id", async (req, res) => {
  const { id: deleteId } = req.params;
  await PlaceModel.findByIdAndDelete(deleteId);
  const { token } = req.cookies;
  const { id } = await jwtGlobalCookie(token);
  const placesDoc = await PlaceModel.find({ owner: id });
  res.json(placesDoc);
});
//Get All Places For Home Page
app.get("/all-places", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    const { id } = await jwtGlobalCookie(token);
    const placesDoc = await PlaceModel.find({ owner: { $ne: id } });
    res.json(placesDoc);
  } else {
    res.json(await PlaceModel.find());
  }
});
app.post("/booking", async (req, res) => {
  const { checkIn, checkOut, maxGuests, name, phone, totalNights, id } =
    req.body;
  const { token } = req.cookies;
  const { id: userId } = await jwtGlobalCookie(token);
  await BookingModel.create({
    owner: userId,
    place: id,
    checkIn,
    checkOut,
    maxGuests,
    name,
    phone,
    totalNights,
  });
  res.json("Place Booked");
});
app.get("/bookings", async (req, res) => {
  const { token } = req.cookies;
  const { id: userId } = await jwtGlobalCookie(token);
  const bookingsDoc = await BookingModel.find({ owner: userId }).populate(
    "place"
  );
  res.json(bookingsDoc);
});
app.post("/single-booking", async (req, res) => {
  const { id } = req.body;
  const bookingDoc = await BookingModel.findById(id).populate("place");
  res.json(bookingDoc);
});
