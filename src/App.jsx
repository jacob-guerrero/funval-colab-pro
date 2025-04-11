import React, { useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import MealPage from "./components/MealPage";
import Search from "./components/Search";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Seafood");
  const [view, setView] = useState("categories");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            setSelectedCategory={setSelectedCategory}
            setView={setView}
          />
        }
      />
      <Route
        path="categories"
        element={
          <CategoriesPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            view={view}
            setView={setView}
          />
        }
      />
      <Route path="meal/:id" element={<MealPage />} />
      <Route path="search/:name" element={<Search />} />
    </Routes>
  );
}
