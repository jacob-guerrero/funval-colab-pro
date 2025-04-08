import Cards from "./Cards";

export default function Dishes({ comidas }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(7,_minmax(0,_1fr))]">
      {comidas?.map((meal) => (
        <Cards
          key={meal.idMeal}
          nombre={meal.strMeal}
          imagen={meal.strMealThumb}
          formato="rectangular"
        />
      ))}
    </div>
  );
}

