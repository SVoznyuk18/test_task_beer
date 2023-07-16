import React, {useState} from "react";
import Button from "./Button";
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
    <main>
      <Button onClick={() => hanndleDelete(recipes, selectedRecipes)} isShow={!!selectedRecipes.length}/>
      <ul className="recipesList">
        {
          filteredRecipes && filteredRecipes.map((recipe) => (
            <li 
              className={`recipeCard ${selectedRecipes.includes(recipe?.id) ? 'recipeCard_active' : ''}`}
              key={recipe?.id} 
              onContextMenu={(e) => handleRightClick(e, recipe?.id)}
            >
              <p>{recipe?.id}</p>
              <p>{recipe?.name}</p>
              <p>{recipe?.tagline}</p>
              <p>{recipe?.description}</p>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Main;