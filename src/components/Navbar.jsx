import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="px-2 py-3 bg-emerald-700 text-white flex justify-center">
      <nav className="w-full max-w-screen-lg flex items-center justify-between gap-2">
        <div className="flex gap-2 items-center justify-center">
          <img src="/logo.png" alt="logo" className="w-8" />
          <p className="text-lg font-bold">Comidex</p>
        </div>

        <form className="hidden md:flex justify-center items-center grow-1">
          <input
            className="w-full max-w-xs lg:max-w-sm px-2 py-1 rounded-l-md bg-white text-black"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <button>
            <img
              src="/icons/search.svg"
              alt="search icon"
              className="p-1 rounded-r-md bg-emerald-900 "
            />
          </button>
        </form>

        <div className="flex gap-2 justify-end">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="categories" className="font-semibold">
            Categories
          </Link>
        </div>
      </nav>
    </header>
  );
}
