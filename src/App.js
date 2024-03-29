import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { useRecipes } from "./store";
import Main from "./pages/Main/Main";
import Recipe from './pages/Recipe/Recipe';

function App() {
  const { recipes, getRecipes, deleteRecipe, incAmountPage } = useRecipes(
    (state) => ({
      recipes: state.recipes,
      amountPages: state.amountPages,
      getRecipes: state.getRecipes,
      deleteRecipe: state.deleteRecipe,
      incAmountPage: state.incAmountPage
    }),
    shallow
  );

  useEffect(() => {
    getRecipes(); //get recipes
  }, []);

  //increace amout page after that get another 25 recipes
  useEffect(() => {
    if (recipes.length !== 0 && recipes.length < 15) {
      incAmountPage();
    }
  }, [recipes]);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main recipes={recipes} deleteRecipe={deleteRecipe}/>}/>
          <Route path="/recipe/:id" element={<Recipe recipes={recipes}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
