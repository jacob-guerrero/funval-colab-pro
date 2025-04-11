import Cards from "./Cards";

export default function Dishes({ comidas, onSelectDish }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(7,_minmax(0,_1fr))]">
      {comidas?.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => onSelectDish?.(meal.idMeal)}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Cards
            nombre={meal.strMeal}
            imagen={meal.strMealThumb}
            formato="rectangular"
          />
        </div>
      ))}
    </div>
  );
}
