// /src/modules/pokemon.js - Pokemon class

export default class Pokemon {
  constructor(id, name, height, weight, image, backImg) {
    this.id = id;
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.height = height;
    this.weight = weight;
    this.image = image;
    this.backImage = backImg;
    this.likesCounter = 0;
    this.commentsCounter = 0;
    this.comments = [];
  }
}