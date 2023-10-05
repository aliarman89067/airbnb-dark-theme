import React, { useState } from "react";
import {
  FaChevronLeft,
  FaImages,
  FaRegHeart,
  FaShareFromSquare,
} from "react-icons/fa6";

export default function Gallery({ place }) {
  const [showGallery, setShowGallery] = useState(false);
  if (showGallery) {
    return (
      <div className="fixed inset-0 z-10 bg-white flex flex-col items-center overflow-y-scroll">
        <div className="flex justify-between w-full py-4 px-10">
          <div
            onClick={() => setShowGallery(false)}
            className="p-4 rounded-full hover:bg-gray-300 text-gray-800 cursor-pointer"
          >
            <FaChevronLeft />
          </div>
          <div className="flex gap-4">
            <a
              className="flex items-center gap-1 text-gray-800 text-md underline dark:text-gray-700"
              href="#"
            >
              <FaShareFromSquare size={15} />
              Share
            </a>
            <a
              className="flex items-center gap-1 text-gray-800 text-md underline dark:text-gray-700"
              href="#"
            >
              <FaRegHeart size={15} />
              Save
            </a>
          </div>
        </div>
        <div className="w-[80%] md:w-[70%] lg:w-[60%] h-full">
          {place.photos[0] && (
            <div className="w-full h-[80%] my-2">
              <img
                className="w-full h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[0]}
                alt=""
              />
            </div>
          )}
          {place.photos[1] && place.photos[2] && (
            <div className="flex max-w-full h-[50%] gap-2 overflow-hidden">
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[1]}
                alt=""
              />
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[2]}
                alt=""
              />
            </div>
          )}
          {place.photos[3] && (
            <div className="w-full h-[80%] my-2">
              <img
                className="w-full h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[3]}
                alt=""
              />
            </div>
          )}
          {place.photos[4] && place.photos[5] && (
            <div className="flex w-full h-[50%] gap-2 overflow-hidden">
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[4]}
                alt=""
              />
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[5]}
                alt=""
              />
            </div>
          )}
          {place.photos[6] && (
            <div className="w-full h-[80%] my-2">
              <img
                className="w-full h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[6]}
                alt=""
              />
            </div>
          )}
          {place.photos[7] && place.photos[8] && (
            <div className="flex w-full h-[50%] gap-2 overflow-hidden">
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[7]}
                alt=""
              />
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[8]}
                alt=""
              />
            </div>
          )}
          {place.photos[9] && (
            <div className="w-full h-[80%] my-2">
              <img
                className="w-full h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[9]}
                alt=""
              />
            </div>
          )}
          {place.photos[10] && place.photos[10] && (
            <div className="flex w-full h-[50%] gap-2 overflow-hidden">
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[10]}
                alt=""
              />
              <img
                className="w-[50%] h-full object-cover"
                src={"http://localhost:4000/uploads/" + place.photos[11]}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="relative grid md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr] gap-2 overflow-hidden h-[400px] rounded-2xl mt-6">
      <div className="bg-gray-200 h-[400px] hover:opacity-80 transition-all duration-300">
        <img
          onClick={() => setShowGallery(true)}
          className="h-full w-full object-cover cursor-pointer"
          src={`http://localhost:4000/uploads/${place.photos[0]}`}
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 gap-2">
        <div className="h-[200px] hover:opacity-80 transition-all duration-300">
          <img
            onClick={() => setShowGallery(true)}
            className="h-full w-full object-cover cursor-pointer"
            src={`http://localhost:4000/uploads/${place.photos[1]}`}
            alt=""
          />
        </div>
        <div className="h-[200px] hover:opacity-80 transition-all duration-300">
          <img
            onClick={() => setShowGallery(true)}
            className="h-full w-full object-cover cursor-pointer"
            src={`http://localhost:4000/uploads/${place.photos[2]}`}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <div className="h-[200px] hover:opacity-80 transition-all duration-300">
          <img
            onClick={() => setShowGallery(true)}
            className="h-full w-full object-cover cursor-pointer"
            src={`http://localhost:4000/uploads/${place.photos[3]}`}
            alt=""
          />
        </div>
        <div className="h-[200px] hover:opacity-80 transition-all duration-300">
          <img
            onClick={() => setShowGallery(true)}
            className="h-full w-full object-cover cursor-pointer"
            src={`http://localhost:4000/uploads/${place.photos[4]}`}
            alt=""
          />
        </div>
      </div>
      <button
        onClick={() => setShowGallery(true)}
        className="flex items-center gap-2 absolute right-2 bottom-4 bg-[rgba(255,255,255,.7)] text-gray-800 border border-gray-500 px-4 py-1 rounded-lg"
      >
        <FaImages /> Show all Photos
      </button>
    </div>
  );
}
