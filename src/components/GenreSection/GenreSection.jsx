import React from "react";

import {
  Clapperboard,
  Drama,
  Flame,
  Ghost,
  Heart,
  Laugh,
  Shield,
  Sparkles,
} from "lucide-react";

const genres = [
  {
    name: "Action",
    icon: Shield,
  },
  {
    name: "Comedy",
    icon: Laugh,
  },
  {
    name: "Drama",
    icon: Drama,
  },
  {
    name: "Romance",
    icon: Heart,
  },
  {
    name: "Thriller",
    icon: Flame,
  },
  {
    name: "Horror",
    icon: Ghost,
  },
  {
    name: "Adventure",
    icon: Sparkles,
  },
  {
    name: "Animation",
    icon: Clapperboard,
  },
];

const GenreSection = () => {
  return (
    <section className="py-10">

      {/* Header */}
      <div className="mb-6">

        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
          Explore
        </p>

        <h2 className="theme-text mt-1 text-2xl font-bold md:text-3xl theme-transition">
          Browse by Genre
        </h2>

      </div>

      {/* Genres */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

        {genres.map((genre) => {
          const Icon = genre.icon;

          return (
            <button
              key={genre.name}
              type="button"
              className="theme-card theme-border group rounded-xl border p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                <Icon size={21} />
              </div>

              <p className="theme-text-secondary mt-3 text-sm font-semibold transition group-hover:text-red-600 theme-transition">
                {genre.name}
              </p>

            </button>
          );
        })}

      </div>
    </section>
  );
};

export default GenreSection;