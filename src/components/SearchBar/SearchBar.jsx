import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({
  searchTerm,
  onSearchChange,
  onClear,
}) => {
  return (
    <div className="mx-auto w-full max-w-2xl">

      <div className="theme-card theme-border flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm transition focus-within:border-red-500">

        <Search
          size={20}
          className="theme-text-secondary shrink-0"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search for movies or shows..."
          className="theme-input w-full border-none bg-transparent outline-none theme-transition"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={onClear}
            className="theme-text-secondary transition hover:text-red-600"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}

      </div>
    </div>
  );
};

export default SearchBar;