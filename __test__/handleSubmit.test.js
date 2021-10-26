import {jest} from '@jest/globals';
jest.useFakeTimers();
import {handleSubmit} from "../src/client";

it('fetchingData test', async () => {
  const result = await handleSubmit();
  expect(result).toBeDefined()
});
