import {jest} from '@jest/globals';
jest.useFakeTimers();
import {fetchingData} from "../src/client/js/fetchingData";

it('fetchingData test', async () => {
  const result = await fetchingData();
  expect(result).toBeDefined()
});