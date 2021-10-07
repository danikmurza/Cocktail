import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import {setCocktail} from "./service.js";

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  const section = await displayDrinks(data);
  if (section) {
    setCocktail(section);
  }
};

export default showDrinks;
