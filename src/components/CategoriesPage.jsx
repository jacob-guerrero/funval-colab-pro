import React from 'react'
import { useEffect, useState } from "react";
import Category from "./Category";
import Dishes from "./Dishes";


export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
         
          const resCategories = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
          const dataCategories = await resCategories.json();
  
          
          const resDishes = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
          const dataDishes = await resDishes.json();
  
          if (dataCategories.categories && dataDishes.meals) {
            setCategories(dataCategories.categories);
            setDishes(dataDishes.meals.slice(0, 14));
          } else {
            setError("No se pudieron obtener los datos.");
          }
        } catch (err) {
          setError("Error al cargar los datos.");
          console.error("Error:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className="bg-white text-slate-900 font-[Open_Sans] min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Sección Categorías */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-[Lobster] mb-8">Categorías</h2>
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : loading ? (
            <p className="text-center text-gray-500">Cargando datos...</p>
          ) : (
            <Category comidas={categories} />
          )}
        </section>

        {/* Sección Platos */}
        <section>
          <h2 className="text-center text-2xl font-semibold mb-6">Platos</h2>
          <Dishes comidas={dishes} />
        </section>
      </div>
    </div>
  )
}
