import React, { useContext, useState } from "react";
import { ContextApi } from "../ContextApi";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// Imports

export default function RegisterPage() {
  // UseContext States
  const { toggle, setUser } = useContext(ContextApi);
  // Common States
  const [seeEye, setSeeEye] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [redirect, setRedirect] = useState("");
  // Checking States
  const [nameCorrection, setNameCorrection] = useState(undefined);
  const [emailCorrection, setEmailCorrection] = useState(undefined);
  const [passwordCorrection, setPasswordCorrection] = useState(undefined);
  const [photoCorrection, setPhotoCorrection] = useState(true);
  //   Functions
  function handleInputEye() {
    setSeeEye((prev) => (prev === "text" ? "password" : "text"));
  }

  function handleRegister(e) {
    e.preventDefault();

    const nameRegex =
      /^[A-Za-z][A-Za-z0-9_@%&*]+(\s[a-zA-Z0-9@%*&]+)?(\s[a-zA-Z0-9@%*&]+)?$/;
    if (nameRegex.test(name)) {
      setNameCorrection(true);
    } else {
      setNameCorrection(false);
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
      setEmailCorrection(true);
    } else {
      setEmailCorrection(false);
    }
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    if (passwordRegex.test(password)) {
      setPasswordCorrection(true);
    } else {
      setPasswordCorrection(false);
    }
    if (photo) {
      setPhotoCorrection(true);
    } else {
      setPhotoCorrection(false);
    }
    if (nameCorrection && emailCorrection && passwordCorrection && photo) {
      const userData = { name, email, password, photo };
      axios
        .post("/register", userData)
        .then(({ data }) => {
          if (data === "duplicate email") {
            alert("This Email has Already Used!");
          } else {
            alert("Congratulations Registration Complete");
            setUser(data);
            setName("");
            setEmail("");
            setPassword("");
            setPhoto("");
            setRedirect("/");
          }
        })
        .catch((err) => {
          alert("Registration Failed Try Again Later");
        });
    }
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  function handleUserPhoto(e) {
    const file = e.target.files;
    const form = new FormData();
    form.append("photo", file[0]);
    axios
      .post("/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        setPhoto(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={`${toggle} w-full mt-16 flex justify-center items-center`}>
      <form
        onSubmit={handleRegister}
        className="w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[45rem] py-4 px-6 rounded-xl bg-white border border-gray-300 custom-shadow"
      >
        <h1 className="text-3xl text-gray-800 text-center mb-5">
          Registration
        </h1>
        <div className="mb-4">
          <p className="text-lg text-gray-800 mb-1">Full Name</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameCorrection && (
              <div className="p-1 rounded-full bg-green-400 text-white absolute right-2 bottom-3">
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
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
            {nameCorrection === false && (
              <div className="p-1 rounded-full bg-red-400 text-white absolute right-2 bottom-3">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          {nameCorrection === false && (
            <p className="text-sm text-red-600 mt-1">
              Name starts with alphabet
            </p>
          )}
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-800 mb-1">Email</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailCorrection && (
              <div className="p-1 rounded-full bg-green-400 text-white absolute right-2 bottom-3">
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
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
            {emailCorrection === false && (
              <div className="p-1 rounded-full bg-red-400 text-white absolute right-2 bottom-3">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          {emailCorrection === false && (
            <p className="text-sm text-red-600 mt-1">
              Email Pattern is not correct
            </p>
          )}
        </div>
        <div className="mb-4 relative">
          <p className="text-lg text-gray-800 mb-1">Password</p>
          <div className="relative">
            <input
              type={seeEye}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordCorrection && (
              <div className="p-1 rounded-full bg-green-400 text-white absolute right-2 bottom-3">
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
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
            {passwordCorrection === false && (
              <div className="p-1 rounded-full bg-red-400 text-white absolute right-2 bottom-3">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
            <div
              onClick={handleInputEye}
              className="absolute right-[50px] top-[25%] bg-primary dark:bg-lPrimary transition-all duration-300 p-1 rounded-full text-white cursor-pointer"
            >
              {seeEye == "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
              )}
            </div>
          </div>
          {passwordCorrection === false && (
            <p className="text-sm text-red-600 mt-1">
              Weak Password Must have 8 Digits
            </p>
          )}
        </div>
        <div className="flex items-center my-3 gap-2">
          <label className="rounded-full flex justify-center items-center p-[6px] w-16 h-16 text-primary shadow-xl shadow-[rgba(0,0,0,.2)] border border-gray-400 cursor-pointer">
            {photo ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={"http://localhost:4000/uploads/" + photo}
                alt=""
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <input
              type="file"
              name="photo"
              className="hidden"
              onChange={handleUserPhoto}
            />
          </label>
          {photoCorrection === true && (
            <p className="text-gray-700">Choose Profile Photo</p>
          )}
          {photoCorrection === false && (
            <p className="text-red-700">Choose Profile Photo *</p>
          )}
        </div>
        <button type="submit" className="primary">
          Register
        </button>
        <p className="text-center mt-2 text-gray-800">
          Already have an Account?{" "}
          <Link className="underline" to={"/login"}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
