import React, { useMemo, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@mui/material";

import ShowTimeSelector from "./ShowTimeSelector";
import SeatLayout from "./SeatLayout";
import SeatLegend from "./SeatLegend";
import BookingSummary from "./BookingSummary";
import PaymentDetails from "./PaymentDetails";
import BookingSuccess from "./BookingSuccess";

import { useBooking } from "../../context/BookingContext";

const BookingPanel = ({ movie }) => {
  const [step, setStep] = useState(1);

  const [selectedTime, setSelectedTime] = useState("");

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [bookingId, setBookingId] = useState("");

  const { addBooking } = useBooking();

  const convenienceFee = 30;

  // ==========================================
  // TOTAL
  // ==========================================

  const subtotal = useMemo(() => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  }, [selectedSeats]);

  const totalAmount = subtotal + convenienceFee;

  // ==========================================
  // NEXT
  // ==========================================

  const handleNext = () => {
    if (step === 1 && !selectedTime) {
      alert("Please select a showtime.");

      return;
    }

    if (step === 2 && selectedSeats.length === 0) {
      alert("Please select at least one seat.");

      return;
    }

    setStep((previous) => Math.min(3, previous + 1));
  };

  // ==========================================
  // BACK
  // ==========================================

  const handleBack = () => {
    setStep((previous) => Math.max(1, previous - 1));
  };

  // ==========================================
  // PAYMENT SUCCESS
  // ==========================================

  const handlePaymentSuccess = () => {
    const newBookingId = `BK-${Date.now()}`;

    const booking = {
      id: newBookingId,

      movieId: movie.id,

      movieName: movie.name,

      movieImage: movie.image?.medium || movie.image?.original || "",

      showTime: selectedTime,

      date: new Date().toLocaleDateString("en-IN"),

      seats: selectedSeats,

      subtotal,

      convenienceFee,

      totalAmount,

      status: "Confirmed",

      bookedAt: new Date().toISOString(),
    };

    addBooking(booking);

    setBookingId(newBookingId);

    setStep(4);
  };

  return (
    <section className="theme-bg border-t theme-border py-10 theme-transition">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* HEADER */}

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Booking
          </p>

          <h2 className="theme-text mt-1 text-3xl font-bold">
            Book Your Tickets
          </h2>

          <p className="theme-text-secondary mt-2">{movie.name}</p>
        </div>

        {/* PROGRESS */}

        {step !== 4 && (
          <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
            {[1, 2, 3].map((currentStep) => (
              <React.Fragment key={currentStep}>
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    step >= currentStep
                      ? "bg-red-600 text-white"
                      : "theme-card theme-border theme-text-secondary border"
                  }`}
                >
                  {currentStep}
                </div>

                {currentStep < 3 && (
                  <div
                    className={`h-0.5 w-8 sm:w-14 ${
                      step > currentStep
                        ? "bg-red-600"
                        : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* STEP 1 */}

        {step === 1 && (
          <div>
            <ShowTimeSelector
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />

            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              onClick={handleNext}
              className="!mt-6 !bg-red-600 !py-3.5 !normal-case !font-semibold !shadow-none hover:!bg-red-700"
            >
              Continue to Seats
            </Button>
          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div>
            <SeatLayout
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />

            <SeatLegend />

            <p className="theme-text-secondary mt-5 text-center text-sm">
              {selectedSeats.length}{" "}
              {selectedSeats.length === 1 ? "seat" : "seats"} selected
            </p>

            <div className="mt-6 flex gap-3">
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ArrowLeft size={18} />}
                onClick={handleBack}
                className="!normal-case"
              >
                Back
              </Button>

              <Button
                fullWidth
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                onClick={handleNext}
                className="!bg-red-600 !normal-case !shadow-none hover:!bg-red-700"
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div>
            <BookingSummary
              selectedSeats={selectedSeats}
              convenienceFee={convenienceFee}
            />

            <PaymentDetails
              totalAmount={totalAmount}
              onSuccess={handlePaymentSuccess}
            />

            <Button
              fullWidth
              variant="outlined"
              startIcon={<ArrowLeft size={18} />}
              onClick={handleBack}
              className="!mt-4 !normal-case"
            >
              Back to Seats
            </Button>
          </div>
        )}

        {/* SUCCESS */}

        {step === 4 && (
          <BookingSuccess
            movie={movie}
            selectedSeats={selectedSeats}
            selectedTime={selectedTime}
            totalAmount={totalAmount}
            bookingId={bookingId}
          />
        )}
      </div>
    </section>
  );
};

export default BookingPanel;
