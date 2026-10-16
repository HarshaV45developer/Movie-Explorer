import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");

      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Failed to load favorites:", error);

      return [];
    }
  });

  // Save favorites whenever state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ==============================
  // ADD / REMOVE FAVORITE
  // ==============================

  const toggleFavorite = (movie) => {
    setFavorites((previousFavorites) => {
      const exists = previousFavorites.some(
        (favorite) => favorite.id === movie.id,
      );

      if (exists) {
        return previousFavorites.filter((favorite) => favorite.id !== movie.id);
      }

      return [...previousFavorites, movie];
    });
  };

  // ==============================
  // CHECK FAVORITE
  // ==============================

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  // ==============================
  // REMOVE
  // ==============================

  const removeFavorite = (movieId) => {
    setFavorites((previousFavorites) =>
      previousFavorites.filter((movie) => movie.id !== movieId),
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
};