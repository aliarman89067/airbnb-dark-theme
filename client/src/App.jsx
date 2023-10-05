import React, { useContext } from "react";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ContextApi } from "./ContextApi";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage";
import BookingsPage from "./pages/BookingsPage";
import PlacesPage from "./pages/PlacesPage";
import PlaceFormPage from "./pages/PlaceFormPage";
import SinglePlacePage from "./pages/SinglePlacePage";
import SingleBookingPage from "./pages/SingleBookingPage.jsx";

export default function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:4000";
  const { toggle } = useContext(ContextApi);
  return (
    <div className={`${toggle}`}>
      <div
        className={`bg-dark w-full dark:bg-light min-h-screen transition-all duration-300`}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<PlaceFormPage />} />
            <Route path="/account/places/:id" element={<PlaceFormPage />} />
            <Route path="/place/:id" element={<SinglePlacePage />} />
            <Route
              path="/account/bookings/booking/:id"
              element={<SingleBookingPage />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
