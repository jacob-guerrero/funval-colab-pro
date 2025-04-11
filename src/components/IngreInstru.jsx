import React from "react";

export default function IngreInstru({ response }) {

    const datos = response?.meals[0] || {};

    const ingredientes = Object.entries(datos)?.filter(
        ([key, value]) => key.includes("strIngredient") && value
    );
    const medidas = Object.entries(datos)?.filter(
        ([key, value]) =>
            key.includes("strMeasure") && (value !== (" " || "" || null))
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
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b p-2 text-left">Ingrediente</th>
                                <th className="border-b p-2 text-left">Medida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredientes.map((ingrediente, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-2 flex items-center gap-2 overflow-hidden text-ellipsis">
                                        <img src="/zanahoria.png" alt="" className="w-5" />
                                        {ingrediente[1]}
                                    </td>
                                    <td className="p-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                        {medidas[index] ? medidas[index][1] : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="md:h-1/2 ">
                    <h1 className=" flex justify-center p-2 bg-emerald-100 font-bold text-lime-700">
                        INSTRUCCIONES
                        <img src="/instrucciones.png" alt="" className="w-5 mx-2" />
                    </h1>
                    {instruciones.map((instruccion, array) => {
                        return (
                            <p className="text-justify py-3" key={array}>
                                {instruccion[1]}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
