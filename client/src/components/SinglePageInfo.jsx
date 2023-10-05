import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SinglePageInfo({ showInfo, setShowInfo, place }) {
  return (
    <div>
      {showInfo && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)] ">
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-600 dark:bg-white h-[80vh] w-[60vw] rounded-3xl overflow-y-scroll custom-scrollbar">
            <AiOutlineClose
              className="absolute left-8 top-4 text-white dark:text-gray-800 text-xl cursor-pointer hover:rotate-90 transition-all duration-300"
              onClick={() => setShowInfo(false)}
            />
            <div className="pt-16 px-8 pb-5">
              <h1 className="text-white mb-2 text-2xl font-semibold dark:text-gray-800">
                Description
              </h1>
              <p className="text-gray-300 dark:text-gray-700 leading-6 mt-2 mb-4">
                {place.description}
              </p>
              <h1 className="text-white mb-2 text-2xl font-semibold dark:text-gray-800">
                Extra Information
              </h1>
              <p className="text-gray-300 dark:text-gray-700 leading-6 mt-2">
                {place.extraInfo}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
