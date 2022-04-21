// /src/modules/pokeComment.js - class that encapsulates a comment for a pokemon

export default class PokeComment {
  constructor(username, date, statement) {
    this.username = username;
    this.date = date;
    this.statement = statement;
  }

  comment2str() {
    return `${this.date} - ${this.statement} by ${this.username}`;
  }
}