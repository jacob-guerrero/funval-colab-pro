import React from "react";
import IngreInstru from "./IngreInstru";
import ImagePlato from "./ImagePlato"
import VideoPlato from "./VideoPlato";
export default function MealPage() {
  return (
    <>
      <h1 className="text-3xl text-center bg-amber-100">Titulo</h1>
      <div className="md:flex ">
        <div className="m-2 md:w-1/2 shadow-md shadow-orange-300 rounded-2xl bg-amber-50 ">
          <IngreInstru />
        </div>
        <div className=" m-2 md:w-1/2 shadow-md shadow-orange-300 rounded-2xl bg-amber-50 ">
          <div className="flex items-center h-70 m-2 ">
            <ImagePlato src={"https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"} />
          </div >
          <div className="flex items-center h-70 m-2 ">
            <VideoPlato youtubeUrl={"https://www.youtube.com/watch?v=1IszT_guI08"} />

          </div>
        </div>
      </div>
    </>)
}
