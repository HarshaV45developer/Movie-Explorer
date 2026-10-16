import React from "react";

const showTimes = ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM", "10:30 PM"];

const ShowTimeSelector = ({ selectedTime, setSelectedTime }) => {
  return (
    <div className="theme-card theme-border rounded-2xl border p-6">
      <h2 className="theme-text text-xl font-bold">Select Showtime</h2>

      <p className="theme-text-secondary mt-1 text-sm">
        Choose a showtime for your movie
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {showTimes.map((time) => {
          const isSelected = selectedTime === time;

          return (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              className={`rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                isSelected
                  ? "border-red-600 bg-red-600 text-white"
                  : "theme-border theme-text hover:border-red-600 hover:text-red-600"
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTimeSelector;
