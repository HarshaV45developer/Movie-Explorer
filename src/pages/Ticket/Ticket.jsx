import React from "react";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Ticket as TicketIcon,
} from "lucide-react";

import { QRCodeCanvas } from "qrcode.react";

import { Link, useParams } from "react-router-dom";

import { Button } from "@mui/material";

import { useBooking } from "../../context/BookingContext";

const Ticket = () => {
  const { bookingId } = useParams();

  const { getBookingById } = useBooking();

  const booking = getBookingById(bookingId);

  if (!booking) {
    return (
      <main className="theme-bg flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <TicketIcon size={50} className="mx-auto text-red-600" />

          <h1 className="theme-text mt-5 text-2xl font-bold">
            Ticket Not Found
          </h1>

          <p className="theme-text-secondary mt-2">
            This booking may have been cancelled or does not exist.
          </p>

          <Button
            component={Link}
            to="/bookings"
            variant="contained"
            className="!mt-6 !bg-red-600 !normal-case !shadow-none"
          >
            My Bookings
          </Button>
        </div>
      </main>
    );
  }

  const qrData = JSON.stringify({
    bookingId: booking.id,
    movie: booking.movieName,
    date: booking.date,
    showTime: booking.showTime,
    seats: booking.seats.map((seat) => seat.id),
  });

  return (
    <main className="theme-bg min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        {/* BACK */}

        <Link
          to="/bookings"
          className="theme-text-secondary inline-flex items-center gap-2 no-underline hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to My Bookings
        </Link>

        {/* TICKET */}

        <div className="theme-card theme-border mt-6 overflow-hidden rounded-2xl border shadow-xl">
          {/* TOP */}

          <div className="bg-gray-950 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600">
                <TicketIcon size={22} />
              </div>

              <div>
                <p className="text-sm text-red-400">Movie Explorer</p>

                <h1 className="text-2xl font-bold">Movie Ticket</h1>
              </div>
            </div>
          </div>

          {/* BODY */}

          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-[1fr_220px] md:p-8">
            {/* LEFT */}

            <div>
              <div className="flex gap-4">
                {booking.movieImage && (
                  <img
                    src={booking.movieImage}
                    alt={booking.movieName}
                    className="h-28 w-20 rounded-lg object-cover"
                  />
                )}

                <div>
                  <h2 className="theme-text text-2xl font-bold">
                    {booking.movieName}
                  </h2>

                  <span className="mt-2 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/40">
                    Confirmed
                  </span>
                </div>
              </div>

              {/* DETAILS */}

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CalendarDays size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Date</p>

                    <p className="theme-text font-semibold">{booking.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Showtime</p>

                    <p className="theme-text font-semibold">
                      {booking.showTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Theatre</p>

                    <p className="theme-text font-semibold">
                      Movie Explorer Theatre
                    </p>
                  </div>
                </div>

                <div>
                  <p className="theme-text-secondary text-xs">Booking ID</p>

                  <p className="theme-text font-semibold">{booking.id}</p>
                </div>
              </div>

              {/* SEATS */}

              <div className="theme-border mt-7 border-t pt-5">
                <p className="theme-text-secondary text-sm">Seats</p>

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

              {/* TOTAL */}

              <div className="theme-border mt-7 border-t pt-5">
                <div className="flex justify-between">
                  <span className="theme-text font-bold">Total Paid</span>

                  <span className="text-xl font-bold text-red-600">
                    ₹{booking.totalAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* QR */}

            <div className="flex flex-col items-center justify-center">
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <QRCodeCanvas value={qrData} size={170} level="M" />
              </div>

              <p className="theme-text mt-4 text-center text-sm font-semibold">
                Scan to verify ticket
              </p>

              <p className="theme-text-secondary mt-1 text-center text-xs">
                Present this QR code at the theatre entrance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ticket;
