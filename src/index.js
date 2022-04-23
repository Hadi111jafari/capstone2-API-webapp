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
    if (res.length >= 1) {
      const commentList = res;
      commentList.forEach((comment) => {
        const morfeus = transform2pokeComments(comment);
        neo.comments.push(morfeus);
        neo.commentsCounter += 1;
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

const displayAmountItemsNav = () => {
  const pokeA = document.querySelector('#pokeNav');
  setTimeout(() => {
    const amountPokes = pokeList.length;
    const pokeStr = `Pokemon (${amountPokes})`;
    pokeA.textContent = pokeStr;
  }, 900);
};

const initPoke = () => {
  PokemonAPI.getInitialList().then((res) => {
    const tempList = res.results;
    tempList.forEach((element) => {
      PokemonAPI.get1poke(element.url).then((res) => {
        transform2poke(res);
        pokeList.sort((a, b) => a.id - b.id);
        UI.displayPokesUI(pokeList);
      });
    });
  })
    .then(() => {
      getLikesAPI();
      displayAmountItemsNav();
    })
    .catch((error) => error);
};

const displayAmountCommentsMod = (id) => {
  let amountComments = -1;
  pokeList.forEach((pokemon) => {
    if (parseInt(pokemon.id, 10) === parseInt(id, 10)) {
      amountComments = pokemon.commentsCounter;
    }
  });
  const h3Comments = document.querySelector('#commentsCounter');
  const commentsCounterStr = `Comments (${amountComments})`;
  h3Comments.textContent = commentsCounterStr;
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
      if (poke.id === parseInt(id, 10)) {
        UI.addInfoModal(poke);
        modal.style.display = 'block';
      }
    });
  }

  if (classesArr.indexOf('likeIcn') !== -1) {
    const li = e.target.parentElement.parentElement.parentElement;
    const { id } = li.dataset;
    InvolvementAPI.postLike(id);
    pokeList.forEach((pokemon) => {
      if (parseInt(pokemon.id, 10) === parseInt(id, 10)) {
        pokemon.likesCounter += 1;
        UI.updateLikesCounter(id);
      }
    });
  }
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});

// modal
document.querySelector('#addComment').addEventListener('submit', (e) => {
  e.preventDefault();

  // get values from inputs
  const username = document.querySelector('#userName').value.trim();
  const comment = document.querySelector('#userComment').value.trim();
  const { id } = document.querySelector('#modId').dataset;
  // get date
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let tempM = '';
  if (month < 10) {
    tempM = `0${month}`;
  } else {
    tempM = month;
  }
  const dateStr = `${year}-${tempM}-${date}`;
  const neo = new PokeComment(username, dateStr, comment);
  // validate inputs
  if (username !== '' && comment !== '') {
    InvolvementAPI.postComment(id, neo);
    pokeList.forEach((pokemon) => {
      if (parseInt(pokemon.id, 10) === parseInt(id, 10)) {
        pokemon.comments.push(neo);
        pokemon.commentsCounter += 1;
      }
    });
    UI.addCommmentMod(neo);
    displayAmountCommentsMod(id);
  }

  document.querySelector('#userName').value = '';
  document.querySelector('#userComment').value = '';
});