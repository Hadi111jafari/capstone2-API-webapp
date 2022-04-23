// src/mocules/__mocks__/API.js

import Pokemon from '../pokemon.js';
import PokeComment from '../pokeComment.js';

export default class API {
  static getItems() {
    const pokemonList = [];
    const neo = new Pokemon(1, 'Bublbasur', 5, 10, 'wwww.google.com', 'wwww.facebook.com');
    const trinity = new Pokemon(2, 'Ivasur', 6, 11, 'wwww.anything.com', 'wwww.whatever.com');

    pokemonList.push(neo);
    pokemonList.push(trinity);

    return pokemonList;
  }

  static getComments() {
    const commentList = [];

    const neo = new PokeComment('hadi', '2022-04-22', 'salam');
    const trinity = new PokeComment('elmer', '2022-04-22', 'Hola');

    commentList.push(neo);
    commentList.push(trinity);

    return commentList;
  }
}