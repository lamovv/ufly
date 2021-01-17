const mdl = require('../dist/index');
const {
  compareVersion
} = mdl;
// import { compareVersion } from '../dist/index';

test("!a && !b", async () => {
  const r = await compareVersion(null, null);
  expect(r).toBe(0);
});
test("!b", async () => {
  const r = await compareVersion('1.2.3', null);
  expect(r).toBe(1);
});
test("!b", async () => {
  const r = await compareVersion(null, '1.2.3');
  expect(r).toBe(-1);
});

test("a > b, 2位", async () => {
  const r = await compareVersion('1.2', '0.2', 2);
  expect(r).toBe(1);
});

test("a = b, 3位", async () => {
  const r = await compareVersion('1.2.3', '1.2.3');
  expect(r).toBe(0);
});

test("a < b, 4位", async () => {
  const r = await compareVersion('0.2.3.4', '1.2.3.4');
  expect(r).toBe(-1);
});
