// /src/modules/__mocks__/commentsCounter.js

import { globaldocument } from '../../../dynamic.js';
import API from './API.js';

const commentsCounter = () => {
  const commentList = API.getComments();

  const commentsCount = commentList.length;

  const commentTitle = globaldocument.querySelector('#comments');

  const str = `Comments (${commentsCount})`;

  commentTitle.textContent = str;
};

export default commentsCounter;