import React from "react";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const BookingSuccess = ({
  movie,
  selectedSeats,
  selectedTime,
  totalAmount,
  bookingId,
}) => {
  const navigate = useNavigate();

  return (
    <div className="theme-card theme-border rounded-2xl border p-8 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/40">
        <CheckCircle2 size={42} className="text-green-600" />
      </div>

      <h1 className="theme-text mt-6 text-3xl font-bold">Booking Confirmed!</h1>

      <p className="theme-text-secondary mt-2">
        Your ticket has been booked successfully.
      </p>

      <div className="theme-border mt-6 rounded-xl border p-5 text-left">
        <div className="flex justify-between py-2">
          <span className="theme-text-secondary">Booking ID</span>

          <span className="theme-text font-semibold">{bookingId}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="theme-text-secondary">Movie</span>

          <span className="theme-text font-semibold">{movie.name}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="theme-text-secondary">Showtime</span>

          <span className="theme-text font-semibold">{selectedTime}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="theme-text-secondary">Seats</span>

          <span className="theme-text font-semibold">
            {selectedSeats.map((seat) => seat.id).join(", ")}
          </span>
        </div>

        <div className="theme-border mt-3 border-t pt-3">
          <div className="flex justify-between">
            <span className="theme-text font-bold">Total</span>

            <span className="font-bold text-red-600">₹{totalAmount}</span>
          </div>
        </div>
      </div>

      <Button
        variant="contained"
        onClick={() => navigate(`/ticket/${bookingId}`)}
        className="!mt-6 !bg-red-600 !px-6 !py-3 !normal-case !shadow-none hover:!bg-red-700"
      >
        View Ticket
      </Button>
    </div>
  );
};

export default BookingSuccess;
