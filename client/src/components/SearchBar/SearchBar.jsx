const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div id="search">
      <input
        value={search}
        onChange={onSearchChange}
        type="text"
        id="search"
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
