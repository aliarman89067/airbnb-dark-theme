import React, { useContext, useState } from "react";
import { ContextApi } from "../ContextApi";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState("");
  const { user, setUser } = useContext(ContextApi);
  async function handleLogout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/login");
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
      <div className="max-w-xl flex flex-col items-center mx-auto gap-4">
        <p className="text-white dark:text-gray-800 text-md transition-all duration-300">
          <strong>Name:</strong> {user?.name} <strong>Email:</strong> (
          {user?.email})
        </p>
        <button onClick={handleLogout} className="primary">
          Logout
        </button>
      </div>
    </div>
  );
}
