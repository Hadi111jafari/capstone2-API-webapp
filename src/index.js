// /src/index.js - entry point

import './style.css';
import Pokemon from './modules/pokemon.js';
import UI from './modules/UI.js';
import PokemonAPI from './modules/pokemonAPI.js';
import InvolvementAPI from './modules/involvementAPI.js';
import PokeComment from './modules/pokeComment.js';

// variables
const pokeList = [];

const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

// methods
const transform2pokeComments = (comment) => {
  const trinity = new PokeComment(comment.username, comment.creation_date, comment.comment);
  return trinity;
};

const transform2poke = (elem) => {
  const neo = new Pokemon(elem.id, elem.name, elem.height, elem.weight, elem.sprites.front_default,
    elem.sprites.back_default);
  InvolvementAPI.getComments(neo.id).then((res) => {
    // console.log('-->index.js - ', res);
    if (res.length >= 1) {
      const commentList = res;
      commentList.forEach((comment) => {
        const morfeus = transform2pokeComments(comment);
        neo.comments.push(morfeus);
        neo.commentsCounter += 1;
        // console.log('-->index.js - getComments() - comment-', i, ': ', comment);
      });
    }
  })
    .catch((error) => error);
  pokeList.push(neo);
};

const getLikesAPI = () => {
  InvolvementAPI.getLIkes().then((res) => {
    if (res.length >= 1) {
      const likesArr = res;
      likesArr.forEach((like) => {
        const idLike = like.item_id;
        const amountLikes = like.likes;
        pokeList.forEach((pokemon) => {
          if (parseInt(pokemon.id, 10) === parseInt(idLike, 10)) {
            pokemon.likesCounter = parseInt(amountLikes, 10);
            const pokeLi = document.querySelector(`#poke-${pokemon.id}`);
            pokeLi.children[1].children[1].children[1].textContent = amountLikes;
          }
        });
      });
    }
  });
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
    .then(() => {
      getLikesAPI();
    })
    .catch((error) => error);
  // getLikesAPI();
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