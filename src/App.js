import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { useRecipes } from "./store";
import './App.css';

import Main from "./Main";
import Recipe from './Recipe';

function App() {
  const { recipes, getAllBeers, deleteRecipe, incAmountPage } = useRecipes(
    (state) => ({
      recipes: state.recipes,
      // errors: state.errors,
      amountPages: state.amountPages,
      getAllBeers: state.getAllBeers,
      deleteRecipe: state.deleteRecipe,
      incAmountPage: state.incAmountPage
    }),
    shallow
  );

  useEffect(() => {
    getAllBeers();
  }, []);

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
