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
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {categories.map((category) => (
        <div
          key={category.idCategory}
          onClick={() => onSelectCategory(category.strCategory)}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Cards
            nombre={category.strCategory}
            imagen={category.strCategoryThumb}
            formato="circular"
          />
        </div>
      ))}
    </div>
  );
}
