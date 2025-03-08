import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={recipe.image} alt={recipe.name} className="rounded-md w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{recipe.name}</h3>
      <p className="text-sm text-gray-600">{recipe.type}</p>
      <button className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded-md">
        Ingredients
      </button>
    </div>
  );
};

export default RecipeCard;
