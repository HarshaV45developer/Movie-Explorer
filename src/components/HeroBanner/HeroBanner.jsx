import React from "react";
import { Button } from "@mui/material";

import {
  ArrowRight,
  Play,
  Star,
  Ticket,
} from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">

      {/* Background Decoration */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:px-10">

        {/* Content */}
        <div className="max-w-2xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2">
            <Ticket
              size={16}
              className="text-red-400"
            />

            <span className="text-xs font-semibold uppercase tracking-wider text-red-300">
              Your Entertainment Destination
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Discover
            <span className="text-red-500">
              {" "}
              Movies{" "}
            </span>
            You Will Love
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Explore trending titles, upcoming releases,
            genres and entertainment picks — all from one
            beautiful movie discovery platform.
          </p>

          {/* Rating */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-300">

            <div className="flex items-center gap-2">
              <Star
                size={18}
                fill="currentColor"
                className="text-yellow-400"
              />

              <span className="font-semibold text-white">
                Top Rated
              </span>
            </div>

            <span className="h-5 w-px bg-gray-700" />

            <span>Trending Now</span>

            <span className="h-5 w-px bg-gray-700" />

            <span>Coming Soon</span>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <Button
              variant="contained"
              startIcon={<Play size={18} />}
              className="!bg-red-600 !px-6 !py-3 !normal-case !font-semibold !shadow-none hover:!bg-red-700"
            >
              Explore Movies
            </Button>

            <Button
              variant="outlined"
              endIcon={<ArrowRight size={17} />}
              className="!border-gray-600 !px-6 !py-3 !normal-case !text-white hover:!border-white"
            >
              Explore More
            </Button>

          </div>

        </div>

        {/* Visual */}
        <div className="hidden lg:block">

          <div className="relative mx-auto h-[390px] w-[300px]">

            <div className="absolute left-10 top-8 h-[330px] w-[220px] rotate-[-8deg] rounded-2xl bg-gradient-to-br from-red-900 to-gray-800 opacity-70 shadow-2xl" />

            <div className="absolute left-5 top-0 h-[350px] w-[240px] rotate-[3deg] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-red-600 via-red-950 to-gray-950 shadow-2xl">

              <div className="flex h-full flex-col justify-between p-6">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-200">
                    Movie Explorer
                  </p>

                  <h2 className="mt-4 text-4xl font-black leading-none">
                    Lights.
                    <br />
                    Camera.
                    <br />
                    Action.
                  </h2>
                </div>

                <div>
                  <div className="mb-3 h-1 w-16 rounded-full bg-white" />

                  <p className="text-sm text-red-100">
                    Find something worth watching tonight.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;