import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  let param = pathname.split("/")?.[2];
  if (param === undefined) {
    param = "profile";
  }
  function navClasses(name) {
    let classes =
      " w-32 text-center py-2 rounded-full text-white transition-all duration-300 text-md ";
    if (name === param) {
      classes += " bg-primary dark:bg-lPrimary ";
    } else {
      classes += " bg-gray-600 dark:bg-gray-400 ";
    }
    return classes;
  }
  return (
    <main className="w-full flex justify-center mt-6 mb-8">
      <div className="flex items-center gap-4">
        <Link className={navClasses("profile")} to={"/account"}>
          Profile
        </Link>
        <Link className={navClasses("bookings")} to={"/account/bookings"}>
          Bookings
        </Link>
        <Link className={navClasses("places")} to={"/account/places"}>
          Add Place
        </Link>
      </div>
    </main>
  );
}
