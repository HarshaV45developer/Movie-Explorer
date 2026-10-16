import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";

import { useFavorites } from "../../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(movie);
  };

  return (
    <div className="group w-full overflow-hidden">

      {/* Poster */}
      <div className="theme-card relative overflow-hidden rounded-lg border theme-border theme-transition">

        <img
          src={
            movie.image?.medium ||
            movie.image?.original
          }
          alt={movie.name}
          className="h-[280px] w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Favorite */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition ${
            favorite
              ? "bg-red-600 text-white"
              : "bg-black/60 text-white hover:bg-red-600"
          }`}
          aria-label={
            favorite
              ? `Remove ${movie.name} from favorites`
              : `Add ${movie.name} to favorites`
          }
        >
          <Heart
            size={19}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-sm text-white">
          <Star
            size={14}
            fill="currentColor"
            className="text-yellow-400"
          />

          <span>
            {movie.rating?.average || "N/A"}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="pt-3">

        <h3 className="theme-text line-clamp-1 text-base font-bold theme-transition">
          {movie.name}
        </h3>

        <p className="theme-text-secondary mt-1 line-clamp-1 text-sm theme-transition">
          {movie.genres?.slice(0, 2).join(" • ") || "Movie"}
        </p>

        <p className="theme-text-secondary mt-1 text-sm theme-transition">
          {movie.language || "Unknown"}
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="mt-3 block no-underline"
        >
          <button
            type="button"
            className="w-full rounded-md bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default React.memo(MovieCard);