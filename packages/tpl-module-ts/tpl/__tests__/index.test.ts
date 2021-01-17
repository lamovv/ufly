import { empty } from '../src/index';

test('empty [] to equal true', () => {
  expect(empty<[]>([])).toBe(true);
});
test("empty [''] to equal false", () => {
  expect(empty<string[]>([''])).toBe(false);
});
test('empty [0] to equal false', () => {
  expect(empty<number[]>([0])).toBe(false);
});

test('empty {} to equal true', () => {
  expect(empty<unknown>({})).toBe(true);
});
test('empty {a:1} to equal false', () => {
  interface POpt{
    a: number;
  }
  expect(empty<POpt>({a: 1})).toBe(false);
});

test('empty null to equal true', () => {
  expect(empty<null>(null)).toBe(true);
});

test('empty undefined to equal true', () => {
  expect(empty<undefined>(undefined)).toBe(true);
});