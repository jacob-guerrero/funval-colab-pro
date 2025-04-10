import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import MealPage from "./components/MealPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route path="meal" element={<MealPage />} />
    </Routes>
  );
}
