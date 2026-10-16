import React from "react";
import { Minus, Plus } from "lucide-react";

const TicketCounter = ({ count, setCount }) => {
  return (
    <div className="theme-card theme-border mt-6 rounded-2xl border p-6">
      <h2 className="theme-text text-xl font-bold">Select Tickets</h2>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="theme-text font-semibold">Number of Tickets</p>

          <p className="theme-text-secondary mt-1 text-sm">
            Select how many tickets you need
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            disabled={count <= 1}
            onClick={() => setCount((previous) => Math.max(1, previous - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-text disabled:opacity-40"
          >
            <Minus size={18} />
          </button>

          <span className="theme-text min-w-8 text-center text-xl font-bold">
            {count}
          </span>

          <button
            type="button"
            disabled={count >= 10}
            onClick={() => setCount((previous) => Math.min(10, previous + 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCounter;