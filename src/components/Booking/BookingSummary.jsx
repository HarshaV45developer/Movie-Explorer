import React from "react";

const BookingSummary = ({ selectedSeats, convenienceFee }) => {
  const subtotal = selectedSeats.reduce((total, seat) => total + seat.price, 0);

  const totalAmount = subtotal + convenienceFee;

  return (
    <div className="theme-card theme-border mt-6 rounded-2xl border p-6">
      <h2 className="theme-text text-xl font-bold">Booking Summary</h2>

      {selectedSeats.length === 0 ? (
        <p className="theme-text-secondary mt-4 text-sm">
          No seats selected yet.
        </p>
      ) : (
        <>
          <div className="mt-5">
            <p className="theme-text-secondary text-sm">Selected Seats</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedSeats.map((seat) => (
                <span
                  key={seat.id}
                  className="rounded-full bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 dark:bg-red-950/40"
                >
                  {seat.id} · ₹{seat.price}
                </span>
              ))}
            </div>
          </div>

          <div className="theme-border mt-6 space-y-4 border-t pt-5">
            <div className="flex justify-between">
              <span className="theme-text-secondary">Number of Seats</span>

              <span className="theme-text font-semibold">
                {selectedSeats.length}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="theme-text-secondary">Ticket Subtotal</span>

              <span className="theme-text font-semibold">₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="theme-text-secondary">Convenience Fee</span>

              <span className="theme-text font-semibold">
                ₹{convenienceFee}
              </span>
            </div>

            <div className="theme-border border-t pt-4">
              <div className="flex justify-between">
                <span className="theme-text text-lg font-bold">Total</span>

                <span className="text-xl font-bold text-red-600">
                  ₹{totalAmount}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingSummary;
