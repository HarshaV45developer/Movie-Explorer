import React from "react";
import { Button } from "@mui/material";
import { RotateCcw } from "lucide-react";

const RetryButton = ({
  onRetry,
}) => {
  return (
    <div className="flex justify-center">

      <Button
        type="button"
        variant="contained"
        onClick={onRetry}
        startIcon={
          <RotateCcw size={18} />
        }
        className="!bg-red-600 !px-6 !py-2.5 !normal-case !shadow-none hover:!bg-red-700"
      >
        Retry
      </Button>

    </div>
  );
};

export default RetryButton;