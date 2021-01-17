import {
  compare
} from '../src/index';

describe('compare api test', () => {
  test('a == b', () => {
    expect(compare(1, 1)).toBe(0);
  });
  test('a > b', () => {
    expect(compare(2, 1)).toBe(true);
  });
  test('a < b', () => {
    expect(compare(1, 2)).toBe(false);
  });
});