function SearchBar({ setSearch }) {
  return (
    <div className="flex justify-center mb-8">

      <input
        type="text"
        placeholder="Search projects..."
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          max-w-xl
          p-4
          rounded-2xl
          shadow-lg
          border
          outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      />

    </div>
  );
}

export default SearchBar;