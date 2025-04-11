import React from "react";
import useData from "../hooks/useData";
export default function IngreInstru() {
  const { loading, error, response } = useData(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Koshari"
  );
  const datos = response?.meals[0] || {};

  const ingredientes = Object.entries(datos)?.filter(
    ([key, value]) => key.includes("strIngredient") && value
  );
  const medidas = Object.entries(datos)?.filter(
    ([key, value]) =>
      key.includes("strMeasure") && (value !== " " || "" || null)
  );
  const instruciones = Object.entries(datos)?.filter(
    ([key, value]) => key.includes("strInstructions") && value
  );
  return (
    <div className="">
      <div className="p-5">
        <div className="md:h-1/2 ">
          <h1 className=" flex justify-center p-2 bg-emerald-100 font-bold text-lime-700 ">
            INGREDIENTES
            <img src="/ingredientes1.png" alt="" className="w-5 mx-2" />
          </h1>
          <div className="flex ">
            <div className=" w-2/3 p-3">
              {ingredientes.map((ingrediente, array) => {
                return (
                  <p key={array} className="flex">
                    <img src="/zanahoria.png" alt="" className="w-5" />{" "}
                    {ingrediente[1]}
                  </p>
                );
              })}
            </div>
            <div className="w-1/3 py-3">
              {medidas.map((medida, array) => {
                return <p key={array}>{medida[1]}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="md:h-1/2 ">
          <h1 className=" flex justify-center p-2 bg-emerald-100 font-bold text-lime-700">
            INSTRUCCIONES
            <img src="/instrucciones.png" alt="" className="w-5 mx-2" />
          </h1>
          {instruciones.map((instruccion, array) => {
            return (
              <p className="text-justify text-[10px] py-3" key={array}>
                {instruccion[1]}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
