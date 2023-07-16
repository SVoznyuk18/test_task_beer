import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import { useRecipes } from "./store";
import './App.css';

import Main from "./Main";


function App() {
  const { recipes, getAllBeers, deleteRecipe } = useRecipes(
    (state) => ({
      recipes: state.recipes,
      // errors: state.errors,
      getAllBeers: state.getAllBeers,
      deleteRecipe: state.deleteRecipe
    }),
    shallow
  );

  useEffect(() => {
    getAllBeers();
  }, [getAllBeers]);


  return (
    <div className="App">
      <Main recipes={recipes} deleteRecipe={deleteRecipe}/>
    </div>
  );
}

export default App;
