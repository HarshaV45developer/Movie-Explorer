import React from "react";
import { ChevronRight } from "lucide-react";

import MovieCard from "../MovieCard/MovieCard";

const MovieSection = ({
  title,
  movies = [],
}) => {
  return (
    <section className="py-10">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Movie Explorer
          </p>

          <h2 className="theme-text mt-1 text-2xl font-bold md:text-3xl theme-transition">
            {title}
          </h2>
        </div>

        <button
          type="button"
          className="hidden items-center gap-1 text-sm font-semibold text-red-600 sm:flex"
        >
          See All
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Movies */}
      {movies.length === 0 ? (
        <p className="theme-text-secondary theme-transition">
          No movies available.
        </p>
      ) : (
        <div className="flex gap-5 overflow-x-auto pb-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}

    </section>
  );
};

export default MovieSection;