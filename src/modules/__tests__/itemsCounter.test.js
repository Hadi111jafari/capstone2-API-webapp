// /src/modules/__tests__/itemsCounter.js

import { globaldocument } from '../../../dynamic.js';
import itemsCounter from '../__mocks__/itemsCounter.js';

describe('Tests if items counter is correct:', () => {
  itemsCounter();
  const aPoke = globaldocument.querySelector('#pokeCount');
  const textPoke = aPoke.textContent;

  test('should match the amount of total items.', () => {
    expect(textPoke).toBe('Pokemon (2)');
  });
});