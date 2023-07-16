import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import { useRecipes } from "./store";
import './App.css';

import Main from "./Main";


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
    <div className="App">
      <Main recipes={recipes} deleteRecipe={deleteRecipe}/>
    </div>
  );
}

export default App;
