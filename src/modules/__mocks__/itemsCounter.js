// /src/modules/__mock__/itemsCounter.js

import { globaldocument } from '../../../dynamic.js';
import API from './API.js';

const itemsCounter = () => {
  const pokeList = API.getItems();

  const itemsCount = pokeList.length;

  const navLink = globaldocument.querySelector('#pokeCount');

  const str = `Pokemon (${itemsCount})`;

  navLink.textContent = str;
};

export default itemsCounter;