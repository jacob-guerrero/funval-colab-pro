import React from "react";
import ImagenPrincipal from "./ImagenPrincipal";
import HomeCategories from "./HomeCategories";
import { useNavigate } from "react-router";

export default function HomePage({ setSelectedCategory, setView }) {
  const navigate = useNavigate();

  const handleClick = (value) => {
    setSelectedCategory(value);
    setView("dishes");
    navigate(`/categories`);
  };
  return (
    <div className="w-full h-[calc(100vh-52px)] flex flex-col">
      <ImagenPrincipal />
      <HomeCategories onSelectCategory={handleClick} />
    </div>
  );
}
