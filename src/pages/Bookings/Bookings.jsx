import React from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  Trash2,
  Eye,
} from "lucide-react";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";

import { useBooking } from "../../context/BookingContext";

const Bookings = () => {
  const { bookings, cancelBooking } = useBooking();

  const handleCancel = (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (!confirmed) {
      return;
    }

    cancelBooking(bookingId);
  };

  return (
    <main className="theme-bg min-h-screen theme-transition">
      {/* HEADER */}

      <section className="bg-gray-950 px-5 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
              <Ticket size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                Movie Explorer
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">My Bookings</h1>
            </div>
          </div>

          <p className="mt-5 text-gray-400">
            View and manage your movie tickets.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {bookings.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40">
                <Ticket size={38} className="text-red-600" />
              </div>

              <h2 className="theme-text mt-6 text-2xl font-bold">
                No Bookings Yet
              </h2>

              <p className="theme-text-secondary mt-2">
                Your confirmed movie tickets will appear here.
              </p>

              <Button
                component={Link}
                to="/movies"
                variant="contained"
                className="!mt-6 !bg-red-600 !normal-case !shadow-none hover:!bg-red-700"
              >
                Explore Movies
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="theme-card theme-border overflow-hidden rounded-2xl border shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
                  {/* IMAGE */}

                  <div className="h-60 md:h-full">
                    {booking.movieImage ? (
                      <img
                        src={booking.movieImage}
                        alt={booking.movieName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-60 items-center justify-center bg-gray-900 text-white">
                        <Ticket size={40} />
                      </div>
                    )}
                  </div>

                  {/* DETAILS */}

                  <div className="p-6">
                    <div className="flex flex-col justify-between gap-5 lg:flex-row">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40">
                            Confirmed
                          </span>

                          <span className="theme-text-secondary text-xs">
                            {booking.id}
                          </span>
                        </div>

                        <h2 className="theme-text mt-3 text-2xl font-bold">
                          {booking.movieName}
                        </h2>

                        <div className="mt-4 space-y-2">
                          <div className="theme-text-secondary flex items-center gap-3 text-sm">
                            <CalendarDays size={17} className="text-red-600" />

                            <span>{booking.date}</span>
                          </div>

                          <div className="theme-text-secondary flex items-center gap-3 text-sm">
                            <Clock3 size={17} className="text-red-600" />

                            <span>{booking.showTime}</span>
                          </div>

                          <div className="theme-text-secondary flex items-center gap-3 text-sm">
                            <MapPin size={17} className="text-red-600" />

                            <span>Movie Explorer Theatre</span>
                          </div>
                        </div>
                      </div>

                      {/* PRICE */}

                      <div className="lg:text-right">
                        <p className="theme-text-secondary text-sm">
                          Total Amount
                        </p>

                        <p className="text-2xl font-bold text-red-600">
                          ₹{booking.totalAmount}
                        </p>
                      </div>
                    </div>

                    {/* SEATS */}

                    <div className="theme-border mt-6 border-t pt-5">
                      <p className="theme-text-secondary text-sm">
                        Selected Seats
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {booking.seats.map((seat) => (
                          <span
                            key={seat.id}
                            className="rounded-full bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 dark:bg-red-950/40"
                          >
                            {seat.id}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ACTIONS */}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        component={Link}
                        to={`/ticket/${booking.id}`}
                        variant="contained"
                        startIcon={<Eye size={17} />}
                        className="!bg-red-600 !normal-case !shadow-none hover:!bg-red-700"
                      >
                        View Ticket
                      </Button>

                      <Button
                        variant="outlined"
                        startIcon={<Trash2 size={17} />}
                        onClick={() => handleCancel(booking.id)}
                        className="!border-red-600 !normal-case !text-red-600 hover:!bg-red-50"
                      >
                        Cancel Booking
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Bookings;
