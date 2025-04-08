import React from 'react'

export default function imagenPrincipal() {
    return (
        <div>
            <div className=''>
                <div className='overflow-hidden w-full h-100'>
                    <img src="comida.jpg" alt="" className='object-cover w-full h-full' />
                </div>
                <div className='w-50 h-30 shadow-md shadow-emerald-300 rounded-2xl flex flex-col items-center bg-amber-100 absolute top-20 right-5'>
                    <p className='text-amber-500 rounded-md'>
                        Elige un plato aleatorio
                    </p>
                    <button className='bg-lime-400 w-3/4 rounded-md'>IR</button></div>
            </div>
        </div>
    )
}
