import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoute from "./routes/AppRoutes";
import "./App.css";
// https://api.tvmaze.com/shows

function App() {
  return (
    <>
      <Navbar />
      <AppRoute />
      <Footer />
    </>
  );
}

export default App;
