import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";

import {
  Search,
  MapPin,
  User,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // AUTH
  const { user, isAuthenticated, logout } = useAuth();

  // THEME
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Movies", path: "/movies" },
    { name: "Trending", path: "/trending" },
    { name: "Upcoming", path: "/upcoming" },
    { name: "Events", path: "/events" },
    { name: "Favorites", path: "/favorites" },
  ];

  const handleDrawer = () => {
    setMobileOpen((previous) => !previous);
  };

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
  };

  const isDark = theme === "dark";

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className={
          isDark
            ? "!bg-gray-900 !text-white border-b border-gray-700"
            : "!bg-white !text-gray-800 border-b border-gray-200"
        }
      >
        <Toolbar className="!min-h-[68px] !px-4 md:!px-8 lg:!px-12 gap-4">
          {/* ==================== LOGO ==================== */}

          <Link
            to="/"
            className="flex items-center gap-2 no-underline shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-xl">
              🎬
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-red-600">
                Movie Explorer
              </h1>

              <p
                className={
                  isDark
                    ? "text-[10px] text-gray-400"
                    : "text-[10px] text-gray-500"
                }
              >
                Discover • Explore • Enjoy
              </p>
            </div>
          </Link>

          {/* ==================== SEARCH ==================== */}

          <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div
              className={
                isDark
                  ? "w-full flex items-center bg-gray-800 border border-gray-700 rounded-md px-4 py-2.5"
                  : "w-full flex items-center bg-gray-100 border border-gray-200 rounded-md px-4 py-2.5"
              }
            >
              <Search
                size={19}
                className={isDark ? "text-gray-400" : "text-gray-500"}
              />

              <input
                type="text"
                placeholder="Search for Movies, Shows..."
                className={
                  isDark
                    ? "w-full bg-transparent outline-none border-none px-3 text-sm text-white placeholder:text-gray-400"
                    : "w-full bg-transparent outline-none border-none px-3 text-sm text-gray-700"
                }
              />
            </div>
          </div>

          {/* ==================== DESKTOP RIGHT SIDE ==================== */}

          <div className="hidden md:flex items-center gap-3 ml-auto">
            {/* LOCATION */}

            <button
              type="button"
              className={
                isDark
                  ? "flex items-center gap-1 text-sm text-gray-300 hover:text-red-400 transition"
                  : "flex items-center gap-1 text-sm text-gray-700 hover:text-red-600 transition"
              }
            >
              <MapPin size={18} />

              <span>Hyderabad</span>

              <ChevronDown size={15} />
            </button>

            {/* THEME BUTTON */}

            <IconButton
              onClick={toggleTheme}
              className={isDark ? "!text-yellow-400" : "!text-gray-700"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={21} /> : <Moon size={21} />}
            </IconButton>

            {/* ==================== AUTH ==================== */}

            {isAuthenticated ? (
              <>
                {/* PROFILE */}

                <Button
                  component={Link}
                  to="/profile"
                  variant="outlined"
                  startIcon={<User size={17} />}
                  className={
                    isDark
                      ? "!text-white !border-gray-600 !normal-case !rounded-md"
                      : "!text-gray-700 !border-gray-300 !normal-case !rounded-md"
                  }
                >
                  Profile
                </Button>

                {/* LOGOUT */}

                <Button
                  onClick={logout}
                  variant="contained"
                  className="!bg-red-600 hover:!bg-red-700 !normal-case !shadow-none !rounded-md !px-5"
                >
                  Logout
                </Button>
              </>
            ) : (
              /* SIGN IN */

              <Button
                component={Link}
                to="/login"
                variant="contained"
                startIcon={<User size={17} />}
                className="!bg-red-600 hover:!bg-red-700 !normal-case !shadow-none !rounded-md !px-5"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* ==================== MOBILE MENU BUTTON ==================== */}

          <IconButton
            onClick={handleDrawer}
            className={
              isDark
                ? "!ml-auto !text-white md:!hidden"
                : "!ml-auto !text-gray-800 md:!hidden"
            }
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </IconButton>
        </Toolbar>

        {/* ==================== SECOND NAV ==================== */}

        <div
          className={
            isDark
              ? "hidden md:block border-t border-gray-700"
              : "hidden md:block border-t border-gray-100"
          }
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-8 h-11">
              {/* NORMAL NAV LINKS */}

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={
                    isDark
                      ? "no-underline text-sm font-medium text-gray-300 hover:text-red-400 transition"
                      : "no-underline text-sm font-medium text-gray-600 hover:text-red-600 transition"
                  }
                >
                  {link.name}
                </Link>
              ))}

              {/* MY BOOKINGS - ONLY AUTHENTICATED USERS */}

              {isAuthenticated && (
                <Link
                  to="/bookings"
                  className={
                    isDark
                      ? "no-underline text-sm font-medium text-gray-300 hover:text-red-400 transition"
                      : "no-underline text-sm font-medium text-gray-600 hover:text-red-600 transition"
                  }
                >
                  My Bookings
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ==================== MOBILE DRAWER ==================== */}

        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawer}>
          <div
            className={
              isDark
                ? "w-80 min-h-full bg-gray-900 text-white"
                : "w-80 min-h-full bg-white text-gray-900"
            }
          >
            {/* DRAWER HEADER */}

            <div
              className={
                isDark
                  ? "flex items-center justify-between p-5 border-b border-gray-700"
                  : "flex items-center justify-between p-5 border-b border-gray-200"
              }
            >
              <h2 className="text-lg font-bold text-red-600">
                🎬 Movie Explorer
              </h2>

              <IconButton onClick={handleDrawer}>
                <X
                  size={22}
                  className={isDark ? "text-white" : "text-gray-800"}
                />
              </IconButton>
            </div>

            {/* ==================== MOBILE SEARCH ==================== */}

            <div className="p-5">
              <div
                className={
                  isDark
                    ? "flex items-center bg-gray-800 rounded-md px-3 py-3"
                    : "flex items-center bg-gray-100 rounded-md px-3 py-3"
                }
              >
                <Search
                  size={18}
                  className={isDark ? "text-gray-400" : "text-gray-500"}
                />

                <input
                  type="text"
                  placeholder="Search movies..."
                  className={
                    isDark
                      ? "w-full bg-transparent outline-none px-2 text-sm text-white placeholder:text-gray-400"
                      : "w-full bg-transparent outline-none px-2 text-sm"
                  }
                />
              </div>
            </div>

            <Divider />

            {/* ==================== MOBILE THEME ==================== */}

            <button
              type="button"
              onClick={toggleTheme}
              className={
                isDark
                  ? "w-full flex items-center gap-3 px-5 py-4 text-left text-gray-200 hover:bg-gray-800"
                  : "w-full flex items-center gap-3 px-5 py-4 text-left text-gray-700 hover:bg-gray-50"
              }
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}

              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <Divider />

            {/* ==================== MOBILE LINKS ==================== */}

            <div className="p-5 space-y-2">
              {/* NORMAL NAV LINKS */}

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleDrawer}
                  className={
                    isDark
                      ? "block no-underline px-4 py-3 rounded-md text-gray-200 hover:bg-gray-800 hover:text-red-400"
                      : "block no-underline px-4 py-3 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }
                >
                  {link.name}
                </Link>
              ))}

              {/* MY BOOKINGS - ONLY AUTHENTICATED USERS */}

              {isAuthenticated && (
                <Link
                  to="/bookings"
                  onClick={handleDrawer}
                  className={
                    isDark
                      ? "block no-underline px-4 py-3 rounded-md text-gray-200 hover:bg-gray-800 hover:text-red-400"
                      : "block no-underline px-4 py-3 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }
                >
                  My Bookings
                </Link>
              )}
            </div>

            <Divider />

            {/* ==================== MOBILE AUTH ==================== */}

            <div className="p-5 space-y-3">
              {isAuthenticated ? (
                <>
                  {/* PROFILE */}

                  <Button
                    component={Link}
                    to="/profile"
                    onClick={handleDrawer}
                    variant="outlined"
                    fullWidth
                    startIcon={<User size={18} />}
                    className={
                      isDark
                        ? "!text-white !border-gray-600 !normal-case"
                        : "!text-gray-700 !border-gray-300 !normal-case"
                    }
                  >
                    Profile
                  </Button>

                  {/* LOGOUT */}

                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    fullWidth
                    className="!bg-red-600 hover:!bg-red-700 !normal-case !shadow-none"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                /* SIGN IN */

                <Button
                  component={Link}
                  to="/login"
                  onClick={handleDrawer}
                  variant="contained"
                  fullWidth
                  startIcon={<User size={18} />}
                  className="!bg-red-600 hover:!bg-red-700 !normal-case !shadow-none"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
