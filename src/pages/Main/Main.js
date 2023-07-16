import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './main.css';
import Button from '../../components/Button/Button'
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Main = ({recipes, deleteRecipe}) => {

  const [selectedRecipes, setSelectedRecipes] = useState([]);

  //select recipes if right click 
  const handleRightClick = (e, id) => {
    e.preventDefault();
    if (e.button === 2) {  //right mouse click
      if(!selectedRecipes.includes(id)) {
        setSelectedRecipes(prev => [...prev, id]);  //add recipe if we click on recipe
      } else {
        setSelectedRecipes(prev => prev.filter(selectId => selectId !== id)); //remove recipes if we click again on selected recipe
      }
    }
  }

  const hanndleDelete = (recipes, selectedRecipes) => {
    const filteredRecipes = recipes.filter((recipe) => {
      if (!selectedRecipes.includes(recipe?.id)) return true;
      return false;
    });
    deleteRecipe(filteredRecipes);
    setSelectedRecipes([]); //if deleted recipes we clear selectedRecipes arr
  }

  const filteredRecipes = recipes.slice(0, 15); //show only 15 recipes

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