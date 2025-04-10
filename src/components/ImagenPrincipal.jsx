import React from 'react'

export default function ImagenPrincipal() {
    return (
            <div>
                <div className='overflow-hidden w-full h-100'>
                    <img src="comida.jpg" alt="" className='object-cover w-full h-full' />  
                </div>
                <div className='px-2 py-1 w-55 shadow-lg shadow-lime-300 rounded-2xl flex flex-col items-center bg-white absolute top-60 right-1/2 translate-x-25 md:top-30 md:right-25 md:translate-0'>
                        <p className='text-black rounded-md font-bold my-2'>
                        ¿No sabes que comer hoy?
                        </p>
                        <p className='text-gray-400 text-center'>Descubre un nuevo plato aleatorio! ahora</p>
                        <button className=' bg-emerald-500 w-3/5 rounded-md cursor-pointer hover:bg-emerald-200 my-3 font-semibold text-white'>GENERAR</button>
                    </div>
            </div>
    )
}
