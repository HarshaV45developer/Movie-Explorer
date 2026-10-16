import React from "react";

const SeatLegend = () => {
  return (
    <div className="theme-card theme-border mt-5 rounded-xl border p-4">
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded border theme-border" />

          <span className="theme-text-secondary">Available</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded bg-red-600" />

          <span className="theme-text-secondary">Selected</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded bg-gray-400" />

          <span className="theme-text-secondary">Sold</span>
        </div>
      </div>
    </div>
  );
};

export default SeatLegend;
