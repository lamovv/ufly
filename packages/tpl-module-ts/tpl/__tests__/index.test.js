/* eslint-disable quotes */
/* eslint-disable no-undef */
const {
  empty
} = require('../src/index.ts');

test('empty [] to equal true', () => {
  expect(empty([])).toBe(true);
});
test("empty [''] to equal false", () => {
  expect(empty([''])).toBe(false);
});
test("empty [0] to equal false", () => {
  expect(empty([0])).toBe(false);
});

test('empty {} to equal true', () => {
  expect(empty({})).toBe(true);
});
test('empty {a:1} to equal false', () => {
  expect(empty({a: 1})).toBe(false);
});

test('empty null to equal true', () => {
  expect(empty(null)).toBe(true);
});

test('empty undefined to equal true', () => {
  expect(empty(undefined)).toBe(true);
});