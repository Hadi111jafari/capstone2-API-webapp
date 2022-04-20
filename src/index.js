import './style.css';

import Pokemon from './modules/pokemon.js';
import UI from './modules/UI.js';
import PokemonAPI from './modules/pokemonAPI.js';
// variables
const pokeList = [];
// methods
const transform2poke = (elem) => {
  const neo = new Pokemon(elem.id, elem.name, elem.height, elem.weight, elem.sprites.front_default);
  pokeList.push(neo);
};
const initPoke = () => {
  PokemonAPI.getInitialList().then((res) => {
    const tempList = res.results;
    tempList.forEach((element) => {
      PokemonAPI.get1poke(element.url).then((res) => {
        transform2poke(res);
        UI.displayPokesUI(pokeList);
      });
    });
  })
    .catch((error) => error);
};
// Event: on content load
document.addEventListener('DOMContentLoaded', initPoke());
