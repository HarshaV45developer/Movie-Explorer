import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Trending from "../pages/Trending/Trending";
import Upcoming from "../pages/Upcoming/Upcoming";
import Favorites from "../pages/Favorites/Favorites";
import EventCard from "../components/EventCard/EventCard";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Bookings from "../pages/Bookings/Bookings";
import Ticket from "../pages/Ticket/Ticket";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      {/* PROTECTED */}

      <Route
        path="/movies"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />

      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/trending"
        element={
          <ProtectedRoute>
            <Trending />
          </ProtectedRoute>
        }
      />

      <Route
        path="/upcoming"
        element={
          <ProtectedRoute>
            <Upcoming />
          </ProtectedRoute>
        }
      />

      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <EventCard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ticket/:bookingId"
        element={
          <ProtectedRoute>
            <Ticket />
          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route
        path="*"
        element={
          <div className="theme-bg flex min-h-screen items-center justify-center">
            <div className="text-center">
              <h1 className="theme-text text-5xl font-bold">404</h1>

              <p className="theme-text-secondary mt-2">Page not found</p>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
