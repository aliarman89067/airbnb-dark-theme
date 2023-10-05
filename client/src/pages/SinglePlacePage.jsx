import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePageOffers from "../components/SinglePageOffers";
import { Navigate, useParams } from "react-router-dom";
import {
  FaCat,
  FaShareFromSquare,
  FaRegHeart,
  FaChevronRight,
} from "../Icons.js";
import SinglePageInfo from "../components/SinglePageInfo";
import { FaChevronLeft } from "react-icons/fa6";
import { differenceInCalendarDays } from "date-fns";
import Gallery from "../components/Gallery";

export default function SinglePlacePage() {
  const [showOffers, setShowOffers] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(Number);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  //checking array
  //Common States
  const [place, setPlace] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .post("/place-by/" + id)
        .then(({ data }) => {
          setPlace(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  if (!place) {
    return <p className="text-white text-xl mt-2">Loading..</p>;
  }
  let totalNights;
  if ((checkIn, checkOut)) {
    totalNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }
  if (maxGuests < 0) {
    setMaxGuests(0);
  }
  async function handleBooking() {
    const id = place._id;
    const bookingData = {
      checkIn,
      checkOut,
      maxGuests,
      name,
      phone,
      totalNights,
      id,
    };
    await axios.post("/booking", bookingData);
    setRedirect("/account/bookings");
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  const clientInfoTrue = checkIn && checkOut && maxGuests > 0;
  return (
    // Main Container
    <div className="mt-6 relative -mx-6 px-6">
      {/* Title */}
      <h1 className="text-white text-2xl font-semibold dark:text-gray-800">
        {place.title}
      </h1>
      {/* Address and Share Buttons */}
      <div className="flex justify-between">
        <a
          className="text-gray-300 text-md underline dark:text-gray-700"
          href={"https://www.google.com/maps/search/" + place.address}
          target="_blank"
        >
          {place.address}
        </a>
        <div className="flex gap-4">
          <a
            className="flex items-center gap-1 text-gray-300 text-md underline dark:text-gray-700"
            href="#"
          >
            <FaShareFromSquare size={15} />
            Share
          </a>
          <a
            className="flex items-center gap-1 text-gray-300 text-md underline dark:text-gray-700"
            href="#"
          >
            <FaRegHeart size={15} />
            Save
          </a>
        </div>
      </div>
      {/* Gallery Grid */}
      <Gallery place={place} />
      {/* Information */}
      <div className="grid md:grid-cols-[1.5fr_1fr] mt-4 gap-8">
        <div>
          {/* Description */}
          <div>
            <h1 className="text-white text-2xl font-semibold dark:text-gray-800">
              Description
            </h1>
            <p className="text-gray-300 dark:text-gray-700 leading-6 mt-2">
              {place.description}
            </p>
            <button
              onClick={() => setShowInfo(true)}
              className="flex items-center gap-2 underline text-gray-200 dark:text-gray-800 mt-1"
            >
              Show More <FaChevronRight />
            </button>
            <SinglePageInfo
              setShowInfo={setShowInfo}
              showInfo={showInfo}
              place={place}
            />
          </div>
          {/* Perks */}
          <div className="mt-4">
            <h2 className="text-white text-2xl font-semibold dark:text-gray-800">
              What this place offers
            </h2>
            <SinglePageOffers
              place={place}
              showOffers={showOffers}
              setShowOffers={setShowOffers}
            />
            <button
              onClick={() => setShowOffers(true)}
              className="mt-2 px-6 py-3 border dark:border-gray-700 rounded-lg text-gray-200 dark:text-gray-700 dark:hover:bg-lPrimary dark:hover:text-white hover:bg-primary transition-all duration-300"
            >
              Show All Offers
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center shadow-xl dark:shadow-gray-400 border dark:border-gray-300 bg-[#111316] dark:bg-gray-200 rounded-xl p-5">
          <div className="flex justify-between">
            <div className="mb-5">
              <p className="text-gray-200 dark:text-gray-700 text-lg">
                <strong>${place.price}</strong> night
              </p>
            </div>
            <div>
              {totalNights && (
                <p className="text-gray-200 dark:text-gray-700 text-lg">
                  <strong>{totalNights}</strong> night
                </p>
              )}
            </div>
          </div>
          <div className="border dark:border-gray-400 rounded-xl">
            <div className="flex items-center">
              <label className="w-full px-4">
                <p className="-mt-2 text-gray-100 dark:text-gray-700 text-md">
                  CHECK-IN
                </p>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-gray-300 dark:text-gray-400 date"
                />
              </label>
              <div className="w-[1px] h-[80px] bg-gray-200 dark:bg-gray-400" />
              <label className="w-full px-4 ">
                <p className="-mt-2 text-gray-100 dark:text-gray-700 text-md">
                  CHECK-OUT
                </p>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-gray-300 dark:text-gray-400 date"
                />
              </label>
            </div>
            <div className="border-t dark:border-t-gray-400 p-4">
              <label>
                <p className="-mt-2 text-gray-100 dark:text-gray-700 text-lg mb-2">
                  Max Guests
                </p>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </label>
            </div>
            {clientInfoTrue && (
              <>
                <div className="border-t dark:border-t-gray-400 p-4">
                  <label>
                    <p className="-mt-2 text-gray-100 dark:text-gray-700 text-lg mb-2">
                      Enter Full Name
                    </p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="border-t dark:border-t-gray-400 p-4">
                  <label>
                    <p className="-mt-2 text-gray-100 dark:text-gray-700 text-lg mb-2">
                      Enter Phone Number
                    </p>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                </div>
              </>
            )}
          </div>

          <button
            disabled={!clientInfoTrue}
            onClick={handleBooking}
            className="primary mt-4 flex items-center justify-center gap-2"
          >
            Book This Place {totalNights && <p>${totalNights * place.price}</p>}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
