import React from "react";
import { Link } from "react-router-dom";

import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      {/* ==========================================
          MAIN FOOTER
      ========================================== */}

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* =====================================
              BRAND
          ===================================== */}

          <div>
            <h2 className="text-2xl font-bold">
              Movie
              <span className="text-red-600">Explorer</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Discover movies, explore trending shows, book your seats, manage
              your tickets and enjoy a complete movie discovery experience.
            </p>

            {/* Social */}

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                F
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                I
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm font-bold text-gray-400 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                YT
              </a>
            </div>
          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Home
              </Link>

              <Link
                to="/movies"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Movies
              </Link>

              <Link
                to="/trending"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Trending
              </Link>

              <Link
                to="/upcoming"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Upcoming
              </Link>

              <Link
                to="/events"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Events
              </Link>
            </div>
          </div>

          {/* =====================================
              ACCOUNT
          ===================================== */}

          <div>
            <h3 className="text-lg font-bold">My Account</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                to="/favorites"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Favorites
              </Link>

              <Link
                to="/bookings"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                My Bookings
              </Link>

              <Link
                to="/profile"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Profile
              </Link>

              <Link
                to="/login"
                className="text-gray-400 no-underline transition hover:text-red-500"
              >
                Login
              </Link>
            </div>
          </div>

          {/* =====================================
              CONTACT
          ===================================== */}

          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-red-600" />

                <span>Hyderabad, Telangana, India</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="shrink-0 text-red-600" />

                <span>support@movieexplorer.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="shrink-0 text-red-600" />

                <span>+91 90000 00000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          BOTTOM FOOTER
      ========================================== */}

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Movie Explorer. All rights reserved.</p>

          <div className="flex gap-5">
            <button type="button" className="transition hover:text-red-500">
              Privacy Policy
            </button>

            <button type="button" className="transition hover:text-red-500">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
