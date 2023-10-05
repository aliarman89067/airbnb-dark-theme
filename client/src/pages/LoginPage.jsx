import React, { useContext, useState } from "react";
import { ContextApi } from "../ContextApi";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  // Common States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  // Checking States
  const [emailCorrection, setEmailCorrection] = useState(undefined);
  const [passwordCorrection, setPasswordCorrection] = useState(undefined);
  // useContext States
  const { toggle, setUser } = useContext(ContextApi);
  const [seeEye, setSeeEye] = useState("password");
  function handleInputEye() {
    setSeeEye((prev) => (prev === "text" ? "password" : "text"));
  }

  function handleLogin(e) {
    e.preventDefault();

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
    if (emailCorrection && passwordCorrection) {
      axios
        .post("/login", { email, password })
        .then(({ data }) => {
          if (data === "user not found") {
            alert("Use Correct Email or Password");
          } else {
            alert("You Logged in Successfully");
            setUser(data);
            setRedirect("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className={`${toggle} w-full mt-16 flex justify-center items-center`}>
      <form
        onSubmit={handleLogin}
        className="w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[45rem] py-4 px-6 rounded-xl bg-white border-gray-300 custom-shadow"
      >
        <h1 className="text-3xl text-gray-800 text-center mb-5">Login</h1>
        <div className="mb-4">
          <p className="text-lg text-gray-800 mb-1">Email</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailCorrection === true && (
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
        <div className="mb-4">
          <p className="text-lg text-gray-800 mb-1">Password</p>
          <div className="relative">
            <input
              type={seeEye}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordCorrection === true && (
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
              Password Must have 8 Character
            </p>
          )}
        </div>
        <button className="primary">Login</button>
        <p className="text-center mt-2 text-gray-800">
          Don,t have an Account Yet?{" "}
          <Link className="underline" to={"/register"}>
            Create Now
          </Link>
        </p>
      </form>
    </div>
  );
}
