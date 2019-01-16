import { isPangram } from './pangram';

describe('Pangram()', () => {
  test('empty sentence', () => {
    expect(isPangram(''))
      .toBe(false);
  });
  test('recognizes a perfect lower case pangram', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz'))
      .toBe(true);
  });
});
