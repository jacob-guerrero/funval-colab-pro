import React from "react";
import IngreInstru from "./IngreInstru";
import ImagePlato from "./ImagePlato";
import VideoPlato from "./VideoPlato";
import { useParams } from "react-router";
import useData from "../hooks/useData";

export default function MealPage() {
  const params = useParams();
  const { response } = useData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const imagen = response?.meals[0].strMealThumb || "";
  const video = response?.meals[0].strYoutube || "";
  const titulo = response?.meals[0].strMeal || "";
  return (
    <>
      <h1 className="font-bold text-[22px] md:text-3xl py-1 text-center bg-amber-100 flex justify-center items-center text-amber-700">
        {titulo}
        <img src="/plato.png" alt="" className="w-10 h-10 mx-3" />
      </h1>
      <div className="md:flex ">
        <div className="m-2 md:w-1/2 shadow-md shadow-orange-300 rounded-2xl bg-amber-50 ">
          <IngreInstru response={response} />
        </div>
        <div className=" m-2 md:w-1/2 shadow-md shadow-orange-300 rounded-2xl bg-amber-50 ">
          <div className="flex items-center h-70 m-2 ">
            <ImagePlato src={imagen} />
          </div>
          <div className="flex items-center h-70 m-2 ">
            <VideoPlato youtubeUrl={video} />
          </div>
        </div>
      </div>
    </>
  );
}
