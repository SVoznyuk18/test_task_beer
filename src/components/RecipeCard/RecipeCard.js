import React from "react";

import './recipeCard.css';

const RecipeCard = ({recipe, selectedRecipes, handleRightClick}) => {
  return (
    <li 
      className={`recipeCard ${selectedRecipes.includes(recipe?.id) ? 'recipeCard_active' : ''}`}
      onContextMenu={(e) => handleRightClick(e, recipe?.id)}
    >
      <p>{recipe?.id}</p>
      <p>{recipe?.name}</p>
      <p>{recipe?.tagline}</p>
      <p>{recipe?.description}</p>
    </li>
  )
}

export default RecipeCard;