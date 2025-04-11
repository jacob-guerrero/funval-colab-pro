import React from "react";

export default function ImagenPrincipal({ handleClickRandom }) {
  return (
    <div className="w-full h-7/10 relative">
      <div className="overflow-hidden w-full h-full">
        <img src="comida.jpg" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="px-2 py-1 w-55 shadow-md shadow-lime-600 rounded-2xl flex flex-col items-center bg-white absolute top-1/2 right-1/2 translate-x-25 md:top-1/2 md:right-25 md:translate-0 md:-translate-y-1/2">

        <p className="text-black rounded-md font-bold my-2">
          ¿No sabes que comer hoy?
        </p>
        <p className="text-gray-400 text-center">
          Descubre un nuevo plato aleatorio!
        </p>
        <button
          className=" bg-emerald-600 w-3/5 rounded-md cursor-pointer px-2 py-1 hover:bg-emerald-500 my-3 font-semibold text-white"
          onClick={handleClickRandom}
        >
          GENERAR
        </button>
      </div>
    </div>
  );
}
