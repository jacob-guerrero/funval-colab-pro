import Category from "./Category";
import Dishes from "./Dishes";
import useData from "../hooks/useData";

export default function CategoriesPage({
  selectedCategory,
  setSelectedCategory,
  view,
  setView,
}) {
  const {
    response: dishesResponse,
    loading,
    error,
  } = useData(
    view === "dishes"
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      : null
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setView("dishes");
  };

  const dishes = dishesResponse?.meals || [];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {view === "categories" && (
        <>
          <h2 className="text-2xl font-bold text-center mb-6">Categorías</h2>
          <Category onSelectCategory={handleCategorySelect} />
        </>
      )}

      {view === "dishes" && (
        <>
          <button
            onClick={() => setView("categories")}
            className="mb-4 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
          >
            Volver a Categorías
          </button>

          <h2 className="text-2xl font-bold text-center mb-6">
            Platos de {selectedCategory}
          </h2>

          {loading ? (
            <p className="text-center">Cargando platos...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <Dishes comidas={dishes} />
          )}
        </>
      )}
    </div>
  );
}
