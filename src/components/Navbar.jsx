export default function Navbar() {
  return (
    <header className="px-2 py-3 bg-emerald-700 text-white flex justify-center">
      <nav className="w-full max-w-4xl flex items-center justify-between gap-2">
        <p className="text-lg font-bold">Comidex</p>

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
          <a href="#" className="font-semibold ">
            Home
          </a>
          <a href="#" className="font-semibold ">
            Categories
          </a>
        </div>
      </nav>
    </header>
  );
}
