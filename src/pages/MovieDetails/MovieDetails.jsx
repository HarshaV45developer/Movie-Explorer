import React from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "@mui/material";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Globe2,
  Heart,
  Play,
  Star,
  Tv,
} from "lucide-react";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import RetryButton from "../../components/RetryButton/RetryButton";

import useFetch from "../../hooks/useFetch";
import { getMovieById } from "../../services/api";
import { useFavorites } from "../../context/FavoritesContext";

import BookingPanel from "../../components/Booking/BookingPanel";

const MovieDetails = () => {
  const { id } = useParams();

  const { toggleFavorite, isFavorite } = useFavorites();

  const fetchMovie = React.useCallback(() => getMovieById(id), [id]);

  const { data: movie, loading, error, refetch } = useFetch(fetchMovie, null);

  if (loading) {
    return (
      <main className="theme-bg min-h-screen">
        <Loader message="Loading movie details..." />
      </main>
    );
  }

  if (error) {
    return (
      <main className="theme-bg min-h-screen px-5 py-10">
        <ErrorMessage message={error} />

        <RetryButton onRetry={refetch} />

        <div className="mt-5 text-center">
          <Link
            to="/movies"
            className="theme-text-secondary inline-flex items-center gap-2 no-underline transition hover:text-red-600"
          >
            <ArrowLeft size={17} />
            Back to Movies
          </Link>
        </div>
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="theme-bg flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="theme-text text-2xl font-bold">Movie not found</h1>

          <Link
            to="/movies"
            className="mt-4 inline-flex items-center gap-2 text-red-600 no-underline"
          >
            <ArrowLeft size={17} />
            Back to Movies
          </Link>
        </div>
      </main>
    );
  }

  const favorite = isFavorite(movie.id);

  const handleFavorite = () => {
    toggleFavorite(movie);
  };

  return (
    <main className="theme-bg min-h-screen theme-transition">
      {/* Back */}

      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-8">
        <Link
          to="/movies"
          className="theme-text-secondary inline-flex items-center gap-2 font-medium no-underline transition hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to Movies
        </Link>
      </div>

      {/* Details */}

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="theme-card theme-border overflow-hidden rounded-2xl border shadow-sm theme-transition">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]">
            {/* Poster */}

            <div className="flex items-center justify-center bg-gray-900 p-5">
              <img
                src={movie.image?.original || movie.image?.medium}
                alt={movie.name}
                className="h-[450px] w-full max-w-[320px] rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Content */}

            <div className="p-6 md:p-10">
              <h1 className="theme-text text-3xl font-bold md:text-5xl">
                {movie.name}
              </h1>

              {/* Rating */}

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star
                    size={20}
                    fill="currentColor"
                    className="text-yellow-500"
                  />

                  <span className="theme-text font-bold">
                    {movie.rating?.average || "N/A"}
                  </span>

                  <span className="theme-text-secondary">/ 10</span>
                </div>

                <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />

                <span className="theme-text-secondary">
                  {movie.status || "Unknown"}
                </span>
              </div>

              {/* Genres */}

              <div className="mt-6 flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600 dark:bg-red-950/40"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Information */}

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Globe2 size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Language</p>

                    <p className="theme-text font-medium">
                      {movie.language || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Premiered</p>

                    <p className="theme-text font-medium">
                      {movie.premiered || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Tv size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Type</p>

                    <p className="theme-text font-medium">
                      {movie.type || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={19} className="text-red-600" />

                  <div>
                    <p className="theme-text-secondary text-xs">Runtime</p>

                    <p className="theme-text font-medium">
                      {movie.runtime ? `${movie.runtime} min` : "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary */}

              <div className="mt-8">
                <h2 className="theme-text mb-3 text-xl font-bold">
                  About this title
                </h2>

                <div
                  className="theme-text-secondary leading-7"
                  dangerouslySetInnerHTML={{
                    __html: movie.summary || "No summary available.",
                  }}
                />
              </div>

              {/* Actions */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant="contained"
                  startIcon={<Play size={18} />}
                  className="!bg-red-600 !px-6 !py-3 !normal-case !shadow-none hover:!bg-red-700"
                >
                  Watch Trailer
                </Button>

                <Button
                  variant={favorite ? "contained" : "outlined"}
                  startIcon={
                    <Heart
                      size={18}
                      fill={favorite ? "currentColor" : "none"}
                    />
                  }
                  onClick={handleFavorite}
                  className={
                    favorite
                      ? "!bg-red-600 !px-6 !py-3 !normal-case !shadow-none hover:!bg-red-700"
                      : "!border-gray-300 !px-6 !py-3 !normal-case !text-gray-700 hover:!border-red-600 hover:!text-red-600 dark:!border-gray-600 dark:!text-gray-200"
                  }
                >
                  {favorite ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          BOOKING PANEL
      ========================================== */}

      <BookingPanel movie={movie} />
    </main>
  );
};

export default MovieDetails;
