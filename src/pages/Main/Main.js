import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './main.css';
import Button from '../../components/Button/Button'
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Main = ({recipes, deleteRecipe}) => {

  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleRightClick = (e, id) => {
    e.preventDefault();
    if (e.button === 2) {
      if(!selectedRecipes.includes(id)) {
        setSelectedRecipes(prev => [...prev, id]);
      } else {
        setSelectedRecipes(prev => prev.filter(selectId => selectId !== id));
      }
    }
  }

  const hanndleDelete = (recipes, selectedRecipes) => {
    const filteredRecipes = recipes.filter((recipe) => {
      if (!selectedRecipes.includes(recipe?.id)) return true;
      return false;
    });

    deleteRecipe(filteredRecipes);
    setSelectedRecipes([]);
  }

  const filteredRecipes = recipes.slice(0, 15);

  return (
    <>
      <Button onClick={() => hanndleDelete(recipes, selectedRecipes)} isShow={!!selectedRecipes.length}/>
      <ul className="recipesList">
        {
          filteredRecipes && filteredRecipes.map((recipe) => (
            <Link key={recipe?.id} to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} selectedRecipes={selectedRecipes} handleRightClick={handleRightClick}/>
            </Link>
          ))
        }
      </ul>
    </>
  )
}

export default Main;