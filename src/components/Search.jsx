import React from "react";
import useData from "../hooks/useData";
import { useNavigate, useParams } from "react-router";
import Dishes from "./Dishes";

export default function Search() {
  const navigate = useNavigate();
  const params = useParams();
  const { loading, error, response } = useData(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`
  );

  const mealsSearched = response?.meals || [];
  console.log(mealsSearched, params.name);

  function handleClickMeal(id) {
    console.log(id);
    navigate(`/meal/${id}`);
  }

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Search result for "{params.name}"
      </h2>

      {loading ? (
        <p className="text-center">Cargando platos...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <Dishes comidas={mealsSearched} onSelectDish={handleClickMeal} />
      )}
    </div>
  );
}
