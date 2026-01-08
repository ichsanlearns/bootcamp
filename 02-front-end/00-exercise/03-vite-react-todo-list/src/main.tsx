import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import Home from "./pages/Home";
import Root from "./layouts/Root";
import Register from "./pages/auth/register";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
