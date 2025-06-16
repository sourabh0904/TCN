import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/demo" element={<Welcome />} /> {/* Temporary: Using Welcome as demo page */}
    </Routes>
  );
}

export default App;
