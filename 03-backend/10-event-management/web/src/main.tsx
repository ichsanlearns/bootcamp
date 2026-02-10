import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import CreateEvent from "./pages/CreateEvent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/create" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
