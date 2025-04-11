import Cards from "./Cards";
import useData from "../hooks/useData";

export default function Category({ onSelectCategory }) {
  const { response, loading, error } = useData(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (loading) return <p className="text-center">Cargando categorías...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const categories = response?.categories || [];

  return (
    <div className="w-full flex-1 flex justify-center items-center">
      <div className="flex overflow-x-auto space-x-4 px-2 py-4 scrollbar-hide snap-x snap-mandatory">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            onClick={() => onSelectCategory(category.strCategory)}
            className="cursor-pointer hover:scale-105 transition-transform snap-start min-w-[100px] flex-shrink-0"
          >
            <Cards
              nombre={category.strCategory}
              imagen={category.strCategoryThumb}
              formato="circular"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
