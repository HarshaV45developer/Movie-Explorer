import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = ({
  message = "Loading...",
}) => {
  return (
    <div className="flex min-h-[250px] items-center justify-center">

      <div className="flex flex-col items-center gap-4">

        <CircularProgress
          size={42}
          thickness={4}
          sx={{
            color: "#e50914",
          }}
        />

        <p className="theme-text-secondary text-sm font-medium">
          {message}
        </p>

      </div>
    </div>
  );
};

export default Loader;