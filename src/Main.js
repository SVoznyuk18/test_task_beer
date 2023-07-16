import React, {useState} from "react";
import Button from "./Button";
const Main = ({recipes, deleteRecipe}) => {

  const [selectRecipes, setSelectRecipes] = useState([]);

  const handleRightClick = (e, id) => {
    e.preventDefault();
    if (e.button === 2) {
      if(!selectRecipes.includes(id)) {
        setSelectRecipes(prev => [...prev, id]);
      } else {
        setSelectRecipes(prev => prev.filter(selectId => selectId !== id));
      }
    }
  }

  const hanndleDelete = (recipes, selectRecipes) => {
    const filteredRecipes = recipes.filter((recipe) => {
      if (!selectRecipes.includes(recipe?.id)) return true;
      return false;
    });

    deleteRecipe(filteredRecipes);
  }

  return (
    <main>
      <Button onClick={() => hanndleDelete(recipes, selectRecipes)}/>
      <ul className="recipesList">
        {
          recipes && recipes.map((recipe) => (
            <li 
              className={`recipeCard ${selectRecipes.includes(recipe?.id) && 'recipeCard_active'}`}
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