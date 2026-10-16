import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const {
    isAuthenticated,
    authLoading,
  } = useAuth();

  // ==========================================
  // AUTH CHECKING
  // ==========================================

  if (authLoading) {
    return (
      <div className="theme-bg flex min-h-[60vh] items-center justify-center">

        <p className="theme-text-secondary">
          Checking authentication...
        </p>

      </div>
    );
  }

  // ==========================================
  // NOT LOGGED IN
  // ==========================================

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;