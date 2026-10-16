import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import {
  UserRound,
  Mail,
  MapPin,
  Phone,
  LogOut,
  Heart,
  Film,
  CalendarDays,
  ArrowLeft,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // ==========================================
  // NO USER
  // ==========================================

  if (!user) {
    return (
      <main className="theme-bg flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40">
            <UserRound size={30} className="text-red-600" />
          </div>

          <h1 className="theme-text mt-5 text-2xl font-bold">
            User information not available
          </h1>

          <p className="theme-text-secondary mt-2">
            Please login again to continue.
          </p>

          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            className="!mt-5 !bg-red-600 !normal-case !shadow-none hover:!bg-red-700"
          >
            Go to Login
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="theme-bg min-h-screen theme-transition">
      {/* HEADER */}

      <section className="bg-gray-950 px-5 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 no-underline transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
              Movie Explorer
            </p>

            <h1 className="mt-2 text-4xl font-bold md:text-5xl">My Profile</h1>
          </div>
        </div>
      </section>

      {/* PROFILE */}

      <section className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* PROFILE CARD */}

          <div className="theme-card theme-border rounded-2xl border p-6 shadow-sm">
            <div className="flex justify-center">
              <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-red-100 bg-red-50 dark:border-red-950 dark:bg-red-950/40">
                <img
                  src={user.image}
                  alt={`${user.firstName} profile`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <h2 className="theme-text text-2xl font-bold">
                {user.firstName} {user.lastName}
              </h2>

              <p className="theme-text-secondary mt-1 text-sm">
                @{user.username}
              </p>
            </div>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<LogOut size={18} />}
              onClick={handleLogout}
              className="!mt-6 !border-red-600 !py-2.5 !normal-case !text-red-600 hover:!bg-red-50"
            >
              Logout
            </Button>
          </div>

          {/* USER INFORMATION */}

          <div className="theme-card theme-border rounded-2xl border p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-3 border-b theme-border pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40">
                <UserRound size={20} className="text-red-600" />
              </div>

              <div>
                <h2 className="theme-text text-xl font-bold">
                  Personal Information
                </h2>

                <p className="theme-text-secondary text-sm">
                  Your account details
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* First Name */}

              <div className="flex items-start gap-3">
                <UserRound size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">First Name</p>

                  <p className="theme-text mt-1 font-semibold">
                    {user.firstName}
                  </p>
                </div>
              </div>

              {/* Last Name */}

              <div className="flex items-start gap-3">
                <UserRound size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">Last Name</p>

                  <p className="theme-text mt-1 font-semibold">
                    {user.lastName}
                  </p>
                </div>
              </div>

              {/* Username */}

              <div className="flex items-start gap-3">
                <UserRound size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">Username</p>

                  <p className="theme-text mt-1 font-semibold">
                    {user.username}
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-3">
                <Mail size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">Email</p>

                  <p className="theme-text mt-1 break-all font-semibold">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-start gap-3">
                <Phone size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">Phone</p>

                  <p className="theme-text mt-1 font-semibold">{user.phone}</p>
                </div>
              </div>

              {/* Gender */}

              <div className="flex items-start gap-3">
                <UserRound size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">Gender</p>

                  <p className="theme-text mt-1 font-semibold capitalize">
                    {user.gender}
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-start gap-3">
                <MapPin size={19} className="mt-1 text-red-600" />

                <div>
                  <p className="theme-text-secondary text-xs">Location</p>

                  <p className="theme-text mt-1 font-semibold">
                    {user.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS */}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link
            to="/favorites"
            className="theme-card theme-border group rounded-xl border p-5 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
          >
            <Heart size={22} className="text-red-600" />

            <h3 className="theme-text mt-3 font-bold">My Favorites</h3>

            <p className="theme-text-secondary mt-1 text-sm">
              View your saved movies
            </p>
          </Link>

          <Link
            to="/movies"
            className="theme-card theme-border group rounded-xl border p-5 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
          >
            <Film size={22} className="text-red-600" />

            <h3 className="theme-text mt-3 font-bold">Explore Movies</h3>

            <p className="theme-text-secondary mt-1 text-sm">
              Discover more movies
            </p>
          </Link>

          <Link
            to="/events"
            className="theme-card theme-border group rounded-xl border p-5 no-underline shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
          >
            <CalendarDays size={22} className="text-red-600" />

            <h3 className="theme-text mt-3 font-bold">Events</h3>

            <p className="theme-text-secondary mt-1 text-sm">
              Explore live events
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Profile;
