import React from "react";
import ImagenPrincipal from "./ImagenPrincipal";
import HomeCategories from "./HomeCategories";
import { useNavigate } from "react-router";
import useData from "../hooks/useData";

export default function HomePage({ setSelectedCategory, setView }) {
  const navigate = useNavigate();
  const { response } = useData(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const randomId = response?.meals[0].idMeal || "";

  const handleClickRandom = () => {
    navigate(`/meal/${randomId}`);
  };

  const handleClickCategory = (value) => {
    setSelectedCategory(value);
    setView("dishes");
    navigate(`/categories`);
  };
  return (
    <div className="w-full h-[calc(100vh-52px)] flex flex-col">
      <ImagenPrincipal handleClickRandom={handleClickRandom} />
      <HomeCategories onSelectCategory={handleClickCategory} />
    </div>
  );
}
