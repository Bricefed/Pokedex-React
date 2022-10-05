import React from "react";

const Search = ({ value, updateSearch }) => {
  return (
    <form>
      <input
        type="search"
        value={value}
        onChange={(e) => updateSearch(e.target.value)}
      />
      <input type="submit" value="Go" />
    </form>
  );
};

export default Search;
