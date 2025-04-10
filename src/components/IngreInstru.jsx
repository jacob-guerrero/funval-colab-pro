import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function IngreInstru({ }) {
    const [datos, setDatos] = useState([]);
    async function getDatos() {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Koshari")
        setDatos(data.meals[0])
    }
    const ingredientes = Object.entries(datos)
        ?.filter(([key, value]) => key.includes("strIngredient") && value);
    const medidas = Object.entries(datos)
        ?.filter(([key, value]) => key.includes("strMeasure") && (value !== " " || "" || null));
    const instruciones = Object.entries(datos)
        ?.filter(([key, value]) => key.includes("strInstructions") && value);
    useEffect(() => {
        getDatos()
    }, [])
    return (
        <div className='h-screen'>
            <div className='p-5'>
                <div className='md:h-1/2 '>
                    <h1 className='text-center bg-emerald-100 font-bold text-lime-700 '>INGREDIENTES</h1>
                    <div className='flex '>
                        <div className=' w-2/3 '>
                            {ingredientes.map((ingrediente, array) => {
                                return (
                                    <p key={array}>{array + 1}. {ingrediente[1]}</p>
                                )
                            })}
                        </div>
                        <div className='w-1/3 '>
                            {medidas.map((medida, array) => {
                                return (
                                    <p key={array}>{medida[1]}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='md:h-1/2 '>
                    <h1 className='text-center bg-emerald-100 font-bold text-lime-700'>INSTRUCCIONES</h1>
                    {instruciones.map((instruccion, array) => {
                        return (
                            <p className='text-justify text-xs' key={array}>{instruccion[1]}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
