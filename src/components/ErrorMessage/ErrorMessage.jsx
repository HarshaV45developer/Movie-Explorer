import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({
  message = "Something went wrong.",
}) => {
  return (
    <div className="flex min-h-[250px] items-center justify-center px-4">

      <div className="w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950/30">

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/50">

          <AlertCircle
            size={24}
            className="text-red-600"
          />

        </div>

        <h2 className="theme-text text-lg font-bold">
          Something went wrong
        </h2>

        <p className="theme-text-secondary mt-2 text-sm">
          {message}
        </p>

      </div>
    </div>
  );
};

export default ErrorMessage;