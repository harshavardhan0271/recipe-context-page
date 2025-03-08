import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search Recipe"
        className="border p-2 rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
