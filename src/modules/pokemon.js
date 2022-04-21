// /src/modules/pokemon.js - Pokemon class

export default class Pokemon {
  constructor(id, name, height, weight, image) {
    this.id = id;
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.height = height;
    this.weight = weight;
    this.image = image;
  }
}