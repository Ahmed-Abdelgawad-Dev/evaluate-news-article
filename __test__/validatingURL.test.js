import validatingURL from "../src/client/js/validatingURL"


// test1
test('validatingURL REGEX existence test', () => {
  expect(validatingURL('www.yahoo.com')).toBeDefined();
});
// test2
test('validatingURL test true address', () => {
  expect(validatingURL('www.yahoo.com')).toBe(true);
});
//test3
test('validatingURL test wrong address', () => {
  expect(validatingURL('wrong URL')).toBe(false);
});