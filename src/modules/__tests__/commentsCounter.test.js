// /src/modules/__tests__/commentsCounter.js

import { globaldocument } from '../../../dynamic.js';
import commentsCounter from '../__mocks__/commentsCounter.js';

describe('Tests if comments counter is correct:', () => {
  commentsCounter();
  const h3Comments = globaldocument.querySelector('#comments');
  const textComments = h3Comments.textContent;

  test('should match the amount of total comments.', () => {
    expect(textComments).toBe('Comments (2)');
  });
});