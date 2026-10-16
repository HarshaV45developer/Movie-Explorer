import React, { useState } from "react";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieSection from "../../components/MovieSection/MovieSection";
import GenreSection from "../../components/GenreSection/GenreSection";
import CitySection from "../../components/CitySection/CitySection";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import RetryButton from "../../components/RetryButton/RetryButton";

import { getMovies } from "../../services/api";
import useFetch from "../../hooks/useFetch";

const Home = () => {
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

  // ==========================================
  // SECTIONS
  // ==========================================

  const recommendedMovies = filteredMovies.slice(
    0,
    10
  );

  const trendingMovies = filteredMovies.slice(
    10,
    20
  );

  const upcomingMovies = filteredMovies
    .filter((movie) => movie.status === "Running")
    .slice(0, 10);

  return (
    <main className="min-h-screen theme-bg theme-transition">

      {/* =====================================
          HERO
      ===================================== */}

      <HeroBanner />

      {/* =====================================
          SEARCH
      ===================================== */}

      <section className="border-b theme-border theme-bg-secondary px-5 py-8 theme-transition">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClear={handleClearSearch}
        />
      </section>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* SEARCH RESULT */}

        {searchTerm && !loading && !error && (
          <div className="pt-8">

            <p className="theme-text-secondary">
              Search results for{" "}
              <span className="font-bold text-red-600">
                "{searchTerm}"
              </span>
            </p>

          </div>
        )}

        {/* ===================================
            LOADING
        =================================== */}

        {loading && (
          <Loader message="Loading movies..." />
        )}

        {/* ===================================
            ERROR
        =================================== */}

        {!loading && error && (
          <div className="py-12">

            <ErrorMessage message={error} />

            <RetryButton onRetry={refetch} />

          </div>
        )}

        {/* ===================================
            SUCCESS
        =================================== */}

        {!loading && !error && (
          <>
            <MovieSection
              title="Recommended Movies"
              movies={recommendedMovies}
            />

            <MovieSection
              title="Trending Movies"
              movies={trendingMovies}
            />

            <MovieSection
              title="Upcoming Movies"
              movies={upcomingMovies}
            />

            <GenreSection />

            <CitySection />
          </>
        )}

      </div>
    </main>
  );
};

export default Home;