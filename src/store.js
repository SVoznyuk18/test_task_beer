import { create } from "zustand";
import {devtools} from 'zustand/middleware'
export const useRecipes = create(devtools((set, get) => ({
  recipes: [],
  errors: null,
  slectRecipes: [],
  amountPages: 1,
  getRecipes: async () => {  //get recipes
    try {
      const page = get().amountPages;
      const recipes = get().recipes;
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}`
      );
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      set({ recipes: [...recipes, ...data], errors: null });
    } catch (error) {
      set({ errors: error.message });
    }
  },
  deleteRecipe: (filteredRecipes) => { //delete recipes
    set({recipes: filteredRecipes})
  },
  incAmountPage: () => {  //increace amount page
    const currentPage = get().amountPages;
    const getRecipes = get().getRecipes;
    set({amountPages: currentPage + 1});
    getRecipes();  //we increace amount page and get new 25 recipes
  }
})));
