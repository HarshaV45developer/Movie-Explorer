import React from "react";

const seatSections = [
  {
    id: "lower",
    title: "LOWER",
    price: 180,
    rows: ["A", "B"],
  },
  {
    id: "middle",
    title: "MIDDLE",
    price: 250,
    rows: ["C", "D", "E"],
  },
  {
    id: "upper",
    title: "UPPER",
    price: 350,
    rows: ["F", "G"],
  },
];

const soldSeats = ["A3", "A8", "B5", "C2", "C9", "D6", "E3", "F7", "G4"];

const createSeats = (row) => {
  return Array.from({ length: 10 }, (_, index) => ({
    id: `${row}${index + 1}`,
    row,
    number: index + 1,
  }));
};

const SeatLayout = ({ selectedSeats, setSelectedSeats }) => {
  const handleSeatClick = (seat, section) => {
    if (soldSeats.includes(seat.id)) {
      return;
    }

    const alreadySelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.id === seat.id,
    );

    if (alreadySelected) {
      setSelectedSeats((previousSeats) =>
        previousSeats.filter((selectedSeat) => selectedSeat.id !== seat.id),
      );

      return;
    }

    setSelectedSeats((previousSeats) => [
      ...previousSeats,
      {
        id: seat.id,
        category: section.title,
        price: section.price,
      },
    ]);
  };

  return (
    <div className="theme-card theme-border rounded-2xl border p-5 sm:p-6">
      {/* SCREEN */}

      <div className="mb-10">
        <div className="mx-auto max-w-xl">
          <div className="h-2 rounded-full bg-gray-400" />

          <p className="theme-text-secondary mt-3 text-center text-xs font-semibold uppercase tracking-[0.3em]">
            Screen
          </p>
        </div>
      </div>

      {/* SECTIONS */}

      <div className="space-y-10">
        {seatSections.map((section) => (
          <div key={section.id}>
            {/* Category */}

            <div className="mb-4 text-center">
              <h3 className="theme-text text-lg font-bold">{section.title}</h3>

              <p className="mt-1 text-sm font-semibold text-red-600">
                ₹{section.price} / seat
              </p>
            </div>

            {/* Rows */}

            <div className="space-y-3">
              {section.rows.map((row) => {
                const seats = createSeats(row);

                return (
                  <div
                    key={row}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="theme-text-secondary w-5 text-xs font-bold">
                      {row}
                    </span>

                    {/* LEFT */}

                    <div className="flex gap-2">
                      {seats.slice(0, 5).map((seat) => {
                        const selected = selectedSeats.some(
                          (item) => item.id === seat.id,
                        );

                        const sold = soldSeats.includes(seat.id);

                        return (
                          <button
                            key={seat.id}
                            type="button"
                            disabled={sold}
                            onClick={() => handleSeatClick(seat, section)}
                            className={`h-9 w-9 rounded-t-xl border text-xs font-semibold transition sm:h-10 sm:w-10 ${
                              sold
                                ? "cursor-not-allowed border-gray-400 bg-gray-400 text-white"
                                : selected
                                  ? "border-red-600 bg-red-600 text-white"
                                  : "theme-border theme-text hover:border-red-600 hover:text-red-600"
                            }`}
                          >
                            {seat.number}
                          </button>
                        );
                      })}
                    </div>

                    {/* AISLE */}

                    <div className="w-4 sm:w-8" />

                    {/* RIGHT */}

                    <div className="flex gap-2">
                      {seats.slice(5, 10).map((seat) => {
                        const selected = selectedSeats.some(
                          (item) => item.id === seat.id,
                        );

                        const sold = soldSeats.includes(seat.id);

                        return (
                          <button
                            key={seat.id}
                            type="button"
                            disabled={sold}
                            onClick={() => handleSeatClick(seat, section)}
                            className={`h-9 w-9 rounded-t-xl border text-xs font-semibold transition sm:h-10 sm:w-10 ${
                              sold
                                ? "cursor-not-allowed border-gray-400 bg-gray-400 text-white"
                                : selected
                                  ? "border-red-600 bg-red-600 text-white"
                                  : "theme-border theme-text hover:border-red-600 hover:text-red-600"
                            }`}
                          >
                            {seat.number}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatLayout;
