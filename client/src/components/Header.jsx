import React, { useContext, useState } from "react";
import { ContextApi } from "../ContextApi";
import { Link } from "react-router-dom";

export default function Header() {
  const { setToggle, toggle, user } = useContext(ContextApi);
  return (
    <header
      className={`${toggle} flex items-center justify-between shadow-xl -mx-6 px-6 py-4`}
    >
      {/* Logo Part */}
      <Link to={"/"}>
        <div className="text-primary dark:text-lPrimary flex items-center gap-1">
          <h1 className="text-xl font-semibold transition-all duration-300">
            airbnb
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 -rotate-90  transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </Link>
      {/* Menu Part */}
      <div className="translate-x-10 hidden md:flex items-center gap-2 text-gray-800 py-2 px-4 rounded-full bg-white shadow-xl border dark:shadow-xl dark:border">
        <h2>Anywhere</h2>
        <div className="w-[1px] h-[25px] bg-gray-500" />
        <h2>Any Weak</h2>
        <div className="w-[1px] h-[25px] bg-gray-500" />
        <h2>Any Guests</h2>
        <div className="w-[1px] h-[25px] bg-gray-500" />
        <div className="bg-primary dark:bg-lPrimary transition-all duration-300 text-white p-2 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* User Part */}
      <div className="flex items-center gap-2 text-gray-800 py-[4px] px-2 rounded-full bg-white cursor-pointer border border-1 border-gray-800 dark:border dark:border-1 dark:border-gray-400">
        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 mr-2"
        >
          <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full overflow-hidden">
            {user?.photo ? (
              <img
                className="w-full h-full object-cover"
                src={"http://localhost:4000/uploads/" + user?.photo}
                alt="User Image"
              />
            ) : (
              <div className="text-primary dark:text-lPrimary transition-all duration-300 border border-gray-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          {user && (
            <p className="capitalize font-semibold">
              {user?.name?.substring(0, 5)}..
            </p>
          )}
        </Link>
        <button
          onClick={() => setToggle((prev) => (prev === "dark" ? "" : "dark"))}
          className="bg-primary dark:bg-lPrimary transition-all duration-300 text-white p-2 rounded-full"
        >
          {toggle === "" ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
