import React from "react";
import ImagenPrincipal from "./ImagenPrincipal";
import Category from "./Category";
import useData from "../hooks/useData";

export default function HomePage() {
  const { response } = useData(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  console.log(response?.categories);
  const comidas = response?.categories || [];

  return (
    <>
      <ImagenPrincipal />
      <Category comidas={comidas} />
    </>
  );
}
