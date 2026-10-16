import React from "react";

import {
  Heart,
  Trash2,
} from "lucide-react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MovieCard from "../../components/MovieCard/MovieCard";
import { useFavorites } from "../../context/FavoritesContext";

const Favorites = () => {
  const navigate = useNavigate();

  const {
    favorites,
    removeFavorite,
  } = useFavorites();

  return (
    <main className="theme-bg min-h-screen theme-transition">

      {/* Header */}

      <section className="bg-gray-950 px-5 py-12 text-white md:py-16">

        <div className="mx-auto max-w-7xl">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">

              <Heart
                size={24}
                fill="currentColor"
              />

            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                Movie Explorer
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">
                Favorites
              </h1>

            </div>

          </div>

          <p className="mt-5 text-gray-400">
            Your saved movies and shows.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">

        {favorites.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40">

                <Heart
                  size={38}
                  className="text-red-500"
                />

              </div>

              <h2 className="theme-text mt-6 text-2xl font-bold">
                No Favorites Yet
              </h2>

              <p className="theme-text-secondary mt-2">
                Add movies from any movie section
                using the ❤️ button.
              </p>

              <Button
                variant="contained"
                onClick={() =>
                  navigate("/movies")
                }
                className="!mt-6 !bg-red-600 hover:!bg-red-700 !normal-case !shadow-none"
              >
                Explore Movies
              </Button>

            </div>

          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  Your Collection
                </p>

                <h2 className="theme-text mt-1 text-2xl font-bold md:text-3xl">
                  Saved Movies
                </h2>

              </div>

              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-950/40">
                {favorites.length}
              </span>

            </div>

            {/* Grid */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {favorites.map((movie) => (
                <div
                  key={movie.id}
                  className="relative"
                >

                  <button
                    type="button"
                    onClick={() =>
                      removeFavorite(movie.id)
                    }
                    className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:bg-red-700"
                    aria-label={`Remove ${movie.name} from favorites`}
                  >
                    <Trash2 size={18} />
                  </button>

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

export default Favorites;