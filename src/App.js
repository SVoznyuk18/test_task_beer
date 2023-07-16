import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import { useRecipes } from "./store";
import './App.css';


function App() {
  const { beers, getAllBeers } = useRecipes(
    (state) => ({
      beers: state.beers,
      // errors: state.errors,
      getAllBeers: state.getAllBeers
    }),
    shallow
  );

  console.log("beers", beers);

  useEffect(() => {
    getAllBeers();
  }, [getAllBeers]);


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
