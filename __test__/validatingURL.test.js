import validatingURL from "../src/client/js/validatingURL"

test('validatingURL REGEX existence test', () => {
  expect(validatingURL('www.yahoo.com')).toBeDefined();
});
test('validatingURL test true address', () => {
  expect(validatingURL('www.yahoo.com')).toBe(true);
});
test('validatingURL test wrong address', () => {
  expect(validatingURL('wrong URL')).toBe(false);
});