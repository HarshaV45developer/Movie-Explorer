import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  // ==========================================
  // LOAD BOOKINGS
  // ==========================================

  const [bookings, setBookings] = useState(() => {
    try {
      const storedBookings = localStorage.getItem("bookings");

      return storedBookings ? JSON.parse(storedBookings) : [];
    } catch (error) {
      console.error("Failed to load bookings:", error);

      return [];
    }
  });

  // ==========================================
  // SAVE BOOKINGS
  // ==========================================

  const saveBookings = (updatedBookings) => {
    setBookings(updatedBookings);

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  // ==========================================
  // ADD BOOKING
  // ==========================================

  const addBooking = (booking) => {
    const updatedBookings = [booking, ...bookings];

    saveBookings(updatedBookings);

    return booking;
  };

  // ==========================================
  // CANCEL BOOKING
  // ==========================================

  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId,
    );

    saveBookings(updatedBookings);
  };

  // ==========================================
  // GET BOOKING
  // ==========================================

  const getBookingById = (bookingId) => {
    return bookings.find((booking) => booking.id === bookingId);
  };

  // ==========================================
  // CLEAR ALL BOOKINGS
  // ==========================================

  const clearBookings = () => {
    saveBookings([]);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
        getBookingById,
        clearBookings,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// ==========================================
// CUSTOM HOOK
// ==========================================

export const useBooking = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }

  return context;
};
