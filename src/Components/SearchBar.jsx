function SearchBar({ setSearch }) {
  return (
    <input
      className="input"
      placeholder="Search projects..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;