import { create } from "zustand";
import {devtools} from 'zustand/middleware'
export const useRecipes = create(devtools((set) => ({
  beers: [],
  errors: null,
  getAllBeers: async (page = 1) => {
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}`
      );
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      set({ beers: data, errors: null });
    } catch (error) {
      set({ errors: error.message });
    }
  }
})));
