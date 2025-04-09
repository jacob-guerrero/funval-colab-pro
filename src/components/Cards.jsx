export default function Cards({ nombre, imagen, formato }) {
    return (
      <div className="text-center">
        <img
          src={imagen}
          alt={nombre}
          className={
            formato === "rectangular"
              ? "w-full h-48 object-cover rounded-xl mb-2"
              : "w-24 h-24 object-cover rounded-full mx-auto border-2 border-white shadow"
          }
        />
        <p className="text-xs font-semibold mt-2">{nombre}</p>
      </div>
    );
  }
  