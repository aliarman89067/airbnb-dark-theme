import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "../Icons.js";

export default function IndexPage() {
  const [places, setPlaces] = useState(null);
  const [photoData, setPhotoData] = useState({
    photoId: null,
    xValue: 0,
  });
  useEffect(() => {
    axios
      .get("/all-places")
      .then(({ data }) => {
        setPlaces(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!places) {
    return <p className="text-white text-xl mt-2">Loading..</p>;
  }
  const orderedPlace = places.sort((a, b) => b.date - a.date);
  function nextSlide(id, e) {
    e.preventDefault();
    setPhotoData({ photoId: id, xValue: photoData.xValue + 100 });
    if (photoData.xValue === 400) {
      setPhotoData({ photoId: id, xValue: (photoData.xValue = 0) });
    }
  }
  function prevSlide(id, e) {
    e.preventDefault();
    setPhotoData({ photoId: id, xValue: photoData.xValue - 100 });
    if (photoData.xValue === 0) {
      setPhotoData({ photoId: id, xValue: (photoData.xValue = 400) });
    }
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 pb-6">
      {orderedPlace.length > 0 &&
        orderedPlace.map((place) => {
          const { title, address, photos, price } = place;
          return (
            <Link
              key={place._id}
              to={`/place/${place._id}`}
              className="hover:shadow-2xl transition-all duration-400 rounded-2xl m-4 cursor-pointer overflow-hidden relative card-container"
            >
              {photos.length > 0 && (
                <div
                  className={`flex w-full aspect-square rounded-2xl transition-all duration-700 ease`}
                  style={{
                    transform: `${
                      photoData.photoId === place._id
                        ? `translateX(-${photoData.xValue}%)`
                        : ` translateX(0)`
                    }`,
                  }}
                >
                  <img
                    src={"http://localhost:4000/uploads/" + photos[0]}
                    className="select-none min-w-full min-h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <img
                    src={"http://localhost:4000/uploads/" + photos[1]}
                    className="select-none min-w-full min-h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <img
                    src={"http://localhost:4000/uploads/" + photos[2]}
                    className="select-none min-w-full min-h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <img
                    src={"http://localhost:4000/uploads/" + photos[3]}
                    className="select-none min-w-full min-h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <img
                    src={"http://localhost:4000/uploads/" + photos[4]}
                    className="select-none min-w-full min-h-full object-cover rounded-2xl"
                    alt=""
                  />
                </div>
              )}
              <div className="px-4 py-2">
                <h2 className="text-gray-100 dark:text-gray-800 text-md font-semibold truncate mt-1">
                  {title}
                </h2>
                <p className="text-gray-300 dark:text-gray-600 text-sm truncate">
                  {address}
                </p>
                <p className="text-gray-300 dark:text-gray-600 text-md truncate mt-1">
                  <span className="text-white dark:text-gray-800 font-semibold">
                    ${price}
                  </span>{" "}
                  night
                </p>
              </div>
              <div className="handleButtons">
                <div
                  onClick={(e) => prevSlide(place._id, e)}
                  className="absolute top-[35%] left-2 p-2 rounded-full bg-gray-200 text-gray-800"
                >
                  <FaChevronLeft size={12} />
                </div>
                <div
                  onClick={(e) => nextSlide(place._id, e)}
                  className="absolute top-[35%] right-2 p-2 rounded-full bg-gray-200 text-gray-800"
                >
                  <FaChevronRight size={12} />
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
