import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

// ==========================================
// MANUAL FAKE USER
// ==========================================

const DEMO_USER = {
  id: 1,
  firstName: "Harsha",
  lastName: "Vardhan",
  username: "harsha",
  email: "harsha@gmail.com",
  password: "harsha123",
  gender: "Male",
  phone: "+91 1234567890",
  location: "Hyderabad",
  image: "https://i.pravatar.cc/300?img=12",
};

export const AuthProvider = ({ children }) => {
  // ==========================================
  // USER
  // ==========================================

  const [user, setUser] = useState(() => {

    try {
      const storedUser = localStorage.getItem("user");

      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to restore user:", error);

      return null;
    }
  });

  // ==========================================
  // TOKEN
  // ==========================================

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  // ==========================================
  // AUTH LOADING
  // ==========================================

  const [authLoading, setAuthLoading] = useState(true);

  // ==========================================
  // RESTORE SESSION
  // ==========================================

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error("Session restore failed:", error);

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setUser(null);
      setToken(null);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  // ==========================================
  // MANUAL LOGIN
  // ==========================================

  const login = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();

    const isValid =
      normalizedEmail === DEMO_USER.email && password === DEMO_USER.password;

    if (!isValid) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const fakeToken = "movie-explorer-demo-token";

    const safeUser = {
      id: DEMO_USER.id,
      firstName: DEMO_USER.firstName,
      lastName: DEMO_USER.lastName,
      username: DEMO_USER.username,
      email: DEMO_USER.email,
      gender: DEMO_USER.gender,
      phone: DEMO_USER.phone,
      location: DEMO_USER.location,
      image: DEMO_USER.image,
    };

    setUser(safeUser);
    setToken(fakeToken);

    localStorage.setItem("user", JSON.stringify(safeUser));

    localStorage.setItem("token", fakeToken);

    return {
      success: true,
      user: safeUser,
      token: fakeToken,
    };
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // ==========================================
  // AUTH STATUS
  // ==========================================

  const isAuthenticated = Boolean(user && token);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        authLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ==========================================
// CUSTOM HOOK
// ==========================================

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
