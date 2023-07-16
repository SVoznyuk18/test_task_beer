import React from "react";
import { useParams, Link } from 'react-router-dom';

import './recipe.css';
const Recipe = ({recipes}) => {
  const {id} = useParams();
  
  const currentRecipe = recipes.filter(recipe => recipe?.id.toString() === id?.toString());

  return (
    <>
      <Link to='/'>Go Back</Link>
      <div className="recipe">
        <p>{currentRecipe[0]?.id}</p>
        <h1>{currentRecipe[0]?.name}</h1>
        <p>{currentRecipe[0]?.description}</p>
      </div>
    </>
  );
}
export default Recipe;