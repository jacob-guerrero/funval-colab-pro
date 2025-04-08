import React from 'react'

export default function imagenPrincipal() {
    return (
            <div>
                <div className='overflow-hidden w-full h-100'>
                    <img src="comida.jpg" alt="" className='object-cover w-full h-full' />
                    
                </div>
                <div className='w-50 h-30 shadow-lg shadow-lime-300 rounded-2xl flex flex-col items-center bg-white absolute top-65 right-1/2 translate-x-25 md:top-30 md:right-25 md:translate-0'>
                        <p className='text-black rounded-md font-bold my-5'>
                            Elige un plato aleatorio!
                        </p>
                        <button className=' bg-lime-400 w-3/5 rounded-md cursor-pointer hover:bg-emerald-200'>IR</button>
                    </div>
            </div>
    )
}
