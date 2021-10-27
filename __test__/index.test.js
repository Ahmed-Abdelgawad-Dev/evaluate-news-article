import { expect } from '@jest/globals';
import {usingData,handleSubmit,postingData} from "../src/client/js/index";


// test('usingData existence test', () => {
//   expect(usingData).toBeDefined()
// });
// test('handleSubmit existence test',async () => {
//   expect(handleSubmit).toBeDefined();
// });
test('postingData existence test', async () => {
  expect.assertions(1);
  const data = await response.data
  expect(data.toBeDefined())
});

// // async/await can be used.
// it('works with async/await', async () => {
//   expect.assertions(1);
//   const data = await user.getUserName(4);
//   expect(data).toEqual('Mark');
// });