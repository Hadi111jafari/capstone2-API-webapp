// /src/index.js - entry point

import './style.css';
import Pokemon from './modules/pokemon.js';
import UI from './modules/UI.js';
import PokemonAPI from './modules/pokemonAPI.js';

// variables
const pokeList = [];

const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

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

// Event: click anything on the pokemon list
document.querySelector('#pokemons').addEventListener('click', (e) => {
  e.preventDefault();

  const classesTarget = e.target.className;
  const classesArr = classesTarget.split(' ');
  if (classesArr.indexOf('commentBtn') !== -1) {
    const idstr = e.target.id;
    const idArr = idstr.split('-');
    const id = idArr[1];
    pokeList.forEach((poke) => {
      // console.log('-->index.js - poke.id: ', poke.id, ' and id:', id);
      if (poke.id === parseInt(id, 10)) {
        // console.log('-->index.js - poke: ', poke);
        UI.addInfoModal(poke);
        modal.style.display = 'block';
      }
    });
  }
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});
