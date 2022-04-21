// /scr/modules/ui.js - USER INTERFACE class, deals with all modifications to the DOM

export default class UI {
  static addPokemonUI(pokemon) {
    const list = document.querySelector('#pokemons');
    const li = document.createElement('li');
    li.className = 'onePoke';
    li.dataset.id = pokemon.id;
    li.id = `poke-${pokemon.id}`;
    // div image
    const divImage = document.createElement('div');
    divImage.className = 'divImage';
    const pokeImg = document.createElement('img');
    pokeImg.setAttribute('src', `${pokemon.image}`);
    pokeImg.setAttribute('alt', `${pokemon.name}'s picture.`);
    divImage.appendChild(pokeImg);
    // name & like div
    const divName = document.createElement('div');
    divName.className = 'divName';
    const pName = document.createElement('p');
    pName.textContent = `${pokemon.name}`;
    const aLikes = document.createElement('a');
    aLikes.setAttribute('href', '#');
    aLikes.setAttribute('id', `like-${pokemon.id}`);
    aLikes.className = 'aLikes';
    const icon = document.createElement('i');
    icon.className = 'fas fa-heart';
    // display likes counter
    const spanLikes = document.createElement('span');
    spanLikes.textContent = pokemon.likesCounter;
    divName.appendChild(pName);
    aLikes.appendChild(icon);
    aLikes.appendChild(spanLikes); // appends likes counter
    divName.appendChild(aLikes);
    // div buttons
    const divBtns = document.createElement('div');
    divBtns.className = 'divBtns';
    const comment = document.createElement('button');
    comment.textContent = `Comments (${pokemon.commentsCounter})`;
    comment.setAttribute('id', `comment-${pokemon.id}`);
    comment.className = 'commentBtn';
    const reservations = document.createElement('button');
    reservations.textContent = 'Reservations';
    divBtns.appendChild(comment);
    divBtns.appendChild(reservations);
    // append everything
    li.appendChild(divImage);
    li.appendChild(divName);
    li.appendChild(divBtns);
    list.appendChild(li);
  }

  static displayPokesUI(pokemons) {
    const list = document.querySelector('#pokemons');
    list.innerHTML = '';
    pokemons.forEach((pokemon) => this.addPokemonUI(pokemon));
  }

  static addCommmentMod(pComment) {
    const cList = document.querySelector('#commentsList');
    const li = document.createElement('li');
    li.className = 'pokeC';
    const p = document.createElement('p');
    p.className = 'pokeComText';
    p.textContent = pComment.comment2str();
    li.appendChild(p);
    cList.appendChild(li);
  }

  static displayEmptyCommentsMessage() {
    const cList = document.querySelector('#commentsList');
    const li = document.createElement('li');
    li.className = 'pokeC';
    const p = document.createElement('p');
    p.className = 'noComments';
    p.textContent = 'No comments yet';
    li.appendChild(p);
    cList.appendChild(li);
  }

  static displayCommentsMod(comments) {
    const list = document.querySelector('#commentsList');
    list.innerHTML = '';
    if (comments.length === 0) {
      this.displayEmptyCommentsMessage();
    } else {
      comments.forEach((comment) => this.addCommmentMod(comment));
    }
  }

  static addInfoModal(pokemon) {
    const modImg = document.querySelector('#modImage');
    modImg.setAttribute('src', `${pokemon.image}`);
    const modImgBack = document.querySelector('#modImageback');
    modImgBack.setAttribute('src', `${pokemon.backImage}`);
    const modH2 = document.querySelector('#modH2');
    modH2.textContent = `${pokemon.name}`;
    const modId = document.querySelector('#modId');
    modId.textContent = `ID: ${pokemon.id}`;
    const modH = document.querySelector('#modH');
    modH.textContent = `Height: ${pokemon.height}`;
    const modW = document.querySelector('#modW');
    modW.textContent = `Weight: ${pokemon.weight}`;
    const commentsTitle = document.querySelector('#commentsCounter');
    let textCtitle = commentsTitle.textContent;
    textCtitle = `Comments (${pokemon.commentsCounter})`;
    commentsTitle.textContent = textCtitle;
    this.displayCommentsMod(pokemon.comments);
  }
}