import React, { useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import RetryButton from "../../components/RetryButton/RetryButton";

import { getMovies } from "../../services/api";
import useFetch from "../../hooks/useFetch";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data,
    loading,
    error,
    refetch,
  } = useFetch(getMovies, []);

  const movies = Array.isArray(data) ? data : [];

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  // ==========================================
  // FILTER
  // ==========================================

  const filteredMovies = movies.filter((movie) =>
    movie.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="theme-bg min-h-screen theme-transition">

      {/* =========================================
          HEADER
      ========================================= */}

      <section className="bg-gray-950 px-5 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            Movie Explorer
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Explore Movies
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Search and discover movies, shows, ratings,
            genres and more.
          </p>

        </div>
      </section>

      {/* =========================================
          SEARCH
      ========================================= */}

      <section className="theme-bg-secondary theme-border border-b px-5 py-8 theme-transition">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClear={handleClearSearch}
        />
      </section>

      {/* =========================================
          CONTENT
      ========================================= */}

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">

        {/* Search Result */}

        {!loading && !error && searchTerm && (
          <div className="mb-6">

            <p className="theme-text-secondary">
              Search results for{" "}
              <span className="font-bold text-red-600">
                "{searchTerm}"
              </span>
            </p>

          </div>
        )}

        {/* Loading */}

        {loading && (
          <Loader message="Loading movies..." />
        )}

        {/* Error */}

        {!loading && error && (
          <div className="py-10">

            <ErrorMessage message={error} />

            <RetryButton onRetry={refetch} />

          </div>
        )}

        {/* Success */}

        {!loading && !error && (
          <>
            {filteredMovies.length === 0 ? (
              <div className="flex min-h-[300px] items-center justify-center">

                <div className="text-center">

                  <h2 className="theme-text text-2xl font-bold">
                    No movies found
                  </h2>

                  <p className="theme-text-secondary mt-2">
                    Try searching with a different movie name.
                  </p>

                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="mt-5 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Clear Search
                  </button>

                </div>

              </div>
            ) : (
              <>
                {/* Page Title */}

                <div className="mb-6">

                  <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Movie Explorer
                  </p>

                  <h2 className="theme-text mt-1 text-2xl font-bold md:text-3xl">
                    All Movies
                  </h2>

                </div>

                {/* Movie Grid */}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                  {filteredMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  ))}

                </div>
              </>
            )}
          </>
        )}

      </section>
    </main>
  );
};

export default Movies;