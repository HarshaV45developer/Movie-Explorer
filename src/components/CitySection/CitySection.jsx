import React from "react";
import { MapPin } from "lucide-react";

const cities = [
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Mumbai",
  "Delhi",
  "Pune",
  "Kolkata",
  "Vijayawada",
];

const CitySection = () => {
  return (
    <section className="py-10">

      {/* Header */}

      <div className="mb-6">

        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
          Discover
        </p>

        <h2 className="theme-text mt-1 text-2xl font-bold md:text-3xl">
          Movies in Popular Cities
        </h2>

      </div>

      {/* Cities */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

        {cities.map((city) => (
          <button
            key={city}
            type="button"
            className="theme-card theme-border group flex min-h-[100px] flex-col items-center justify-center rounded-xl border px-3 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
          >

            <MapPin
              size={22}
              className="theme-text-secondary transition group-hover:text-red-600"
            />

            <span className="theme-text-secondary mt-2 text-sm font-semibold transition group-hover:text-red-600">
              {city}
            </span>

          </button>
        ))}

      </div>
    </section>
  );
};

export default CitySection;