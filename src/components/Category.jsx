import Cards from "./Cards";

export default function Category({ comidas }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {comidas?.map((category) => (
        <Cards
          key={category.idCategory}
          nombre={category.strCategory}
          imagen={category.strCategoryThumb}
          formato="circular"
        />
      ))}
    </div>
  );
}
