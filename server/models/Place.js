import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  title: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
  description: { type: String, required: true },
  placeOffers: [Object],
  extraInfo: { type: String, required: true },
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  maxGuests: { type: Number, required: true },
  price: { type: Number, required: true },
  date: Number,
});
const PlaceModel = mongoose.model("Place", PlaceSchema);
export default PlaceModel;
