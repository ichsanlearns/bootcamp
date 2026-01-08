import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import EditPage from "./pages/EditPage.tsx";
import CreatePage from "./pages/CreatePage.tsx";
import CreateFormikPage from "./pages/CreateFormikPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/createformik" element={<CreateFormikPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
