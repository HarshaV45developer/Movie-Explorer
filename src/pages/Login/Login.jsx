import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, TextField, InputAdornment, IconButton } from "@mui/material";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
  Film,
  ArrowLeft,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  // ==========================================
  // FORM STATE
  // ==========================================

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ==========================================
  // ERROR STATE
  // ==========================================

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  // ==========================================
  // UI STATE
  // ==========================================

  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================
  // HANDLE CHANGE
  // ==========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
      general: "",
    }));
  };

  // ==========================================
  // VALIDATE
  // ==========================================

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      general: "",
    };

    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";

      isValid = false;
    } else if (!formData.email.trim().includes("@")) {
      newErrors.email = "Enter a valid email";

      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";

      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  // ==========================================
  // HANDLE LOGIN
  // ==========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const result = login(formData.email, formData.password);

    if (!result.success) {
      setErrors({
        email: "",
        password: "",
        general: result.message,
      });

      setIsSubmitting(false);

      return;
    }

    setErrors({
      email: "",
      password: "",
      general: "",
    });

    setIsSubmitting(false);

    navigate("/");
  };

  return (
    <main className="theme-bg flex min-h-[calc(100vh-110px)] items-center justify-center px-4 py-10 theme-transition">
      <div className="w-full max-w-[500px]">
        {/* LOGIN CARD */}

        <div className="theme-card theme-border rounded-2xl border px-6 py-8 shadow-xl sm:px-10 sm:py-10">
          {/* LOGO */}

          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40">
              <Film size={30} className="text-red-600" />
            </div>
          </div>

          {/* HEADING */}

          <div className="mb-8 text-center">
            <h1 className="theme-text text-3xl font-bold sm:text-4xl">
              Welcome Back
            </h1>

            <p className="theme-text-secondary mt-2">
              Sign in to continue exploring movies
            </p>
          </div>

          {/* GENERAL ERROR */}

          {errors.general && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {errors.general}
              </p>
            </div>
          )}

          {/* FORM */}

          <form onSubmit={handleSubmit} noValidate>
            {/* EMAIL */}

            <div className="mb-5">
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email || " "}
                placeholder="Enter your email"
                autoComplete="email"
                disabled={isSubmitting}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound size={19} className="text-gray-400" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </div>

            {/* PASSWORD */}

            <div className="mb-2">
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password || " "}
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={isSubmitting}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockKeyhole size={19} className="text-gray-400" />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="button"
                          disabled={isSubmitting}
                          onClick={() =>
                            setShowPassword((previous) => !previous)
                          }
                        >
                          {showPassword ? (
                            <EyeOff size={19} />
                          ) : (
                            <Eye size={19} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </div>

            {/* LOGIN BUTTON */}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              className="!mt-4 !rounded-[10px] !bg-red-600 !py-3 !text-base !font-semibold !normal-case !shadow-none hover:!bg-red-700"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {/* DEMO CREDENTIALS */}

          <div className="theme-border mt-7 rounded-xl border px-5 py-4">
            <h3 className="theme-text text-sm font-semibold">Demo Login</h3>

            <div className="mt-2 space-y-1 text-sm">
              <p className="theme-text-secondary">
                Email:
                <span className="theme-text ml-1 font-semibold">
                  harsha@gmail.com
                </span>
              </p>

              <p className="theme-text-secondary">
                Password:
                <span className="theme-text ml-1 font-semibold">harsha123</span>
              </p>
            </div>
          </div>
        </div>

        {/* BACK */}

        <div className="mt-5 text-center">
          <Link
            to="/"
            className="theme-text-secondary inline-flex items-center gap-1.5 text-sm no-underline transition hover:text-red-600"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
