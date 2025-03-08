import { useState } from "react";

const RecipeList = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter recipes based on the search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Our Food Recipes</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Recipe"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Display Filtered Recipes */}
      <div className="recipe-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px" }}>
              <img src={recipe.image} alt={recipe.name} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
              <h3>{recipe.name}</h3>
              <p>{recipe.type}</p>
              <button style={{ backgroundColor: "orange", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Ingredients</button>
            </div>
          ))
        ) : (
          <p>No recipe found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
