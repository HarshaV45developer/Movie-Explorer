import React, { useMemo } from "react";

import {
  Flame,
  TrendingUp,
} from "lucide-react";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import RetryButton from "../../components/RetryButton/RetryButton";

import { getMovies } from "../../services/api";
import useFetch from "../../hooks/useFetch";

const Trending = () => {
  const {
    data,
    loading,
    error,
    refetch,
  } = useFetch(getMovies, []);

  const movies = Array.isArray(data) ? data : [];

  // ==========================================
  // TRENDING MOVIES
  // ==========================================

  const trendingMovies = useMemo(() => {
    return [...movies]
      .sort(
        (a, b) =>
          (b.rating?.average || 0) -
          (a.rating?.average || 0)
      )
      .slice(0, 20);
  }, [movies]);

  return (
    <main className="theme-bg min-h-screen theme-transition">

      {/* ==========================================
          HEADER
      ========================================== */}

      <section className="bg-gray-950 px-5 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
              <Flame size={25} />
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                Movie Explorer
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">
                Trending Now
              </h1>

            </div>

          </div>

          <p className="mt-5 max-w-2xl text-gray-400">
            Discover the most popular and highly rated
            titles people are watching right now.
          </p>

        </div>
      </section>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">

        {loading && (
          <Loader message="Loading trending movies..." />
        )}

        {!loading && error && (
          <div className="py-10">

            <ErrorMessage message={error} />

            <RetryButton onRetry={refetch} />

          </div>
        )}

        {!loading && !error && (
          <>
            {/* Top Trending Info */}

            <div className="mb-8 flex flex-wrap items-center gap-3">

              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-950/40">
                <TrendingUp size={17} />
                Top Trending
              </div>

              <p className="theme-text-secondary text-sm">
                Based on current ratings
              </p>

            </div>

            {/* Grid */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {trendingMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  className="relative min-w-0"
                >

                  {/* Ranking */}

                  <div className="absolute left-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-sm font-bold text-white">
                    #{index + 1}
                  </div>

                  <MovieCard movie={movie} />

                </div>
              ))}

            </div>
          </>
        )}

      </section>
    </main>
  );
};

export default Trending;