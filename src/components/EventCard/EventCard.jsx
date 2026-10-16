import React from "react";
import {
  CalendarDays,
  MapPin,
  Ticket,
} from "lucide-react";
import { Button } from "@mui/material";

const events = [
  {
    id: 1,
    title: "Live Music Night",
    category: "Music",
    date: "25 Aug 2026",
    location: "Hyderabad",
    price: "₹499 onwards",
  },
  {
    id: 2,
    title: "Comedy Show",
    category: "Comedy",
    date: "28 Aug 2026",
    location: "Bengaluru",
    price: "₹399 onwards",
  },
  {
    id: 3,
    title: "Standup Special",
    category: "Comedy",
    date: "30 Aug 2026",
    location: "Chennai",
    price: "₹299 onwards",
  },
  {
    id: 4,
    title: "Live Concert",
    category: "Music",
    date: "02 Sep 2026",
    location: "Mumbai",
    price: "₹799 onwards",
  },
  {
    id: 5,
    title: "Theatre Play",
    category: "Theatre",
    date: "05 Sep 2026",
    location: "Hyderabad",
    price: "₹599 onwards",
  },
  {
    id: 6,
    title: "Dance Festival",
    category: "Dance",
    date: "10 Sep 2026",
    location: "Delhi",
    price: "₹449 onwards",
  },
];

const EventCard = () => {
  return (
    <main className="theme-bg min-h-screen theme-transition">

      {/* HEADER */}

      <section className="bg-gray-950 px-5 py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            Live Entertainment
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Explore Events
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Discover concerts, comedy shows, theatre,
            festivals and other exciting events happening
            near you.
          </p>

        </div>
      </section>

      {/* EVENTS */}

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">

        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Discover
          </p>

          <h2 className="theme-text mt-1 text-2xl font-bold md:text-3xl">
            Popular Events
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.id}
              className="theme-card theme-border group overflow-hidden rounded-2xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Event Image */}

              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-red-600 via-red-800 to-gray-950 text-5xl">
                🎟️
              </div>

              {/* Event Details */}

              <div className="p-5">

                <div className="mb-3 flex items-center justify-between">

                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-950/40">
                    {event.category}
                  </span>

                  <Ticket
                    size={18}
                    className="theme-text-secondary"
                  />

                </div>

                <h3 className="theme-text text-xl font-bold">
                  {event.title}
                </h3>

                <div className="theme-text-secondary mt-4 flex items-center gap-3 text-sm">
                  <CalendarDays
                    size={18}
                    className="text-red-600"
                  />
                  <span>{event.date}</span>
                </div>

                <div className="theme-text-secondary mt-2 flex items-center gap-3 text-sm">
                  <MapPin
                    size={18}
                    className="text-red-600"
                  />
                  <span>{event.location}</span>
                </div>

                <p className="theme-text mt-4 text-sm font-semibold">
                  {event.price}
                </p>

                <Button
                  variant="contained"
                  fullWidth
                  className="!mt-5 !bg-red-600 !py-2.5 !normal-case !font-semibold !shadow-none hover:!bg-red-700"
                >
                  Book Tickets
                </Button>

              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
};

export default EventCard;