import React, { useMemo } from "react";

import { CalendarDays, Clock3, Sparkles } from "lucide-react";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import RetryButton from "../../components/RetryButton/RetryButton";

import { getMovies } from "../../services/api";
import useFetch from "../../hooks/useFetch";

const Upcoming = () => {
  const { data, loading, error, refetch } = useFetch(getMovies, []);

  const movies = Array.isArray(data) ? data : [];

  // ==========================================
  // UPCOMING / ACTIVE
  // ==========================================

  const upcomingMovies = useMemo(() => {
    return movies
      .filter(
        (movie) =>
          movie.status === "Running" || movie.status === "To Be Determined",
      )
      .sort((a, b) => {
        const dateA = a.premiered ? new Date(a.premiered).getTime() : 0;

        const dateB = b.premiered ? new Date(b.premiered).getTime() : 0;

        return dateB - dateA;
      })
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
              <CalendarDays size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                Movie Explorer
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">Upcoming Shows</h1>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-gray-400">
            Keep an eye on titles that are currently running or are yet to be
            determined.
          </p>
        </div>
      </section>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {loading && <Loader message="Loading upcoming titles..." />}

        {!loading && error && (
          <div className="py-10">
            <ErrorMessage message={error} />

            <RetryButton onRetry={refetch} />
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Info */}

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-950/40">
                <Sparkles size={17} />
                Coming Soon
              </div>

              <p className="theme-text-secondary text-sm">
                Stay updated with upcoming entertainment
              </p>
            </div>

            {/* Empty */}

            {upcomingMovies.length === 0 ? (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="text-center">
                  <Clock3 size={40} className="theme-text-secondary mx-auto" />

                  <h2 className="theme-text mt-4 text-2xl font-bold">
                    No upcoming titles found
                  </h2>

                  <p className="theme-text-secondary mt-2">
                    Please try again later.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {upcomingMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Upcoming;
