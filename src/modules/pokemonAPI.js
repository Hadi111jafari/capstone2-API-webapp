// src/modules/pokemonAPI.js - deals with calls to pokemon apo
export default class PokemonAPI {
    static baseURL = 'https://pokeapi.co/api/v2/pokemon/';

    static async getInitialList() {
      const response = await fetch(this.baseURL);
      const data = response.json();
      return data;
    }

    static async get1poke(URL) {
      const response = await fetch(URL);
      const data = response.json();
      return data;
    }
}