import React, { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function BookingsPage() {
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    axios
      .get("/bookings")
      .then(({ data }) => {
        setBooking(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!booking) {
    return (
      <div>
        <AccountNav />
        <p className="text-white text-xl mt-2">Loading..</p>
      </div>
    );
  }
  const orderedBooking = booking.sort((a, b) => a.place.date - b.place.date);
  return (
    <div className="w-full h-full overflow-y-scroll">
      <AccountNav />
      {booking.length === 0 && (
        <p className="text-gray-200 dark:text-gray-700 text-md">
          No places booked yet
        </p>
      )}
      {orderedBooking.length > 0 &&
        orderedBooking.map((place) => (
          <Link
            key={place._id}
            to={`/account/bookings/booking/${place._id}`}
            className="flex flex-col items-center sm:items-start sm:flex-row w-full min-h-36 my-6 p-3 rounded-lg bg-gray-500 dark:bg-gray-300 transition-all duration-300 overflow-hidden relative"
          >
            <img
              className="w-full sm:w-48 h-48 sm:h-36 object-cover rounded-lg shrink-0"
              src={"http://localhost:4000/uploads/" + place.place.photos[0]}
              alt=""
            />
            <div className="flex flex-col items-center sm:items-start pl-0 sm:pl-4">
              <h2 className="text-white dark:text-gray-800 text-md text-center sm:text-left sm:text-xl mb-2 mr-0 sm:mr-20">
                {place.place.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-200 dark:text-gray-700">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  {format(new Date(place.checkIn), "dd-MM-yy")}{" "}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  {format(new Date(place.checkOut), "dd-MM-yy")}
                </div>
              </div>
              <div className="text-gray-200 dark:text-gray-700 mt-1">
                Total Night {place.totalNights}
              </div>
              <div className="text-gray-200 dark:text-gray-700 mt-1">
                Total Price ${place.totalNights * place.place.price}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
