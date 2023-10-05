import React, { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import PlaceOffers from "../components/PlaceOffers";
import axios from "axios";
import UploadPhoto from "../components/UploadPhoto";
import { Navigate, useParams } from "react-router-dom";

export default function PlaceFormPage() {
  //extract id from params
  const { id } = useParams();
  //Common States
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [placeOffers, setPlaceOffers] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(Number);
  const [price, setPrice] = useState(Number);
  const [redirect, setRedirect] = useState("");

  //Title and Para Function
  function handleText(title, para) {
    return (
      <>
        <h2 className="text-white dark:text-gray-700 text-2xl tracking-wide">
          {title}
        </h2>
        <p className="text-gray-300 dark:text-gray-600 text-md mb-2">{para}</p>
      </>
    );
  }
  useEffect(() => {
    if (id) {
      axios
        .post("/place-by/" + id)
        .then(({ data }) => {
          setTitle(data.title);
          setAddress(data.address);
          setPhotos(data.photos);
          setDescription(data.description);
          setPlaceOffers(data.placeOffers);
          setExtraInfo(data.extraInfo);
          setCheckIn(data.checkIn);
          setCheckOut(data.checkOut);
          setMaxGuests(data.maxGuests);
          setPrice(data.price);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  //Form Submit Function
  async function handleSubmitPlace(e) {
    e.preventDefault();
    const placeData = {
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
    };
    if (id) {
      await axios.put("/place", placeData);
      setRedirect("/account/places");
    } else {
      await axios.post("/place", placeData);
      setRedirect("/account/places");
    }
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="flex flex-col">
      <AccountNav />
      <form onSubmit={handleSubmitPlace} className="relative mt-5 -mx-6 px-6">
        {/* Title */}
        <div className="my-2">
          {handleText("Title", "Add small catchy title of your place")}
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Address */}
        <div className="my-2">
          {handleText("Address", "Add your exact location")}
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* Photos */}
        <UploadPhoto
          photoLink={photoLink}
          setPhotoLink={setPhotoLink}
          setPhotos={setPhotos}
          photos={photos}
        />
        {/* Description */}
        <div className="my-2">
          {handleText(
            "Description",
            "Add catchy description about your place define as much as you can"
          )}
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* places offers */}
        <PlaceOffers
          placeOffers={placeOffers}
          setPlaceOffers={setPlaceOffers}
        />
        {/* Extra Info */}
        <div className="my-2">
          {handleText(
            "Extra Information",
            "Add extra information about your place something interesting"
          )}
          <textarea
            placeholder="Enter Information"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
        </div>
        {/* Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div>
            {handleText("Check In", "Enter Check In Time")}
            <input
              type="text"
              placeholder="5:00"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            {handleText("Check Out", "Enter Check Out Time")}
            <input
              type="text"
              placeholder="7:00"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div>
            {handleText("Max Guests", "Enter Max Guests")}
            <input
              type="number"
              placeholder="10"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
          <div>
            {handleText("Price", "Enter Price Of Per Night")}
            <input
              type="number"
              placeholder="120"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <button className="primary my-5">
          {id ? "Edit Place" : "Add Place"}
        </button>
      </form>
    </div>
  );
}
