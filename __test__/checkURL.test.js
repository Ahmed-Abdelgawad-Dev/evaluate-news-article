import checkURL from "../src/client/js/checkURL";

test('checkURL REGEX existence test', () => {
  expect(checkURL('www.yahoo.com')).toBeDefined();
});
test('checkURL test true address', () => {
  expect(checkURL('www.yahoo.com')).toBe(true);
});
test('checkURL test wrong address', () => {
  expect(checkURL('wrong URL')).toBe(false);
});