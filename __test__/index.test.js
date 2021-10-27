import { expect } from '@jest/globals';
import {usingData} from "../src/client/js/index";

// Testing using data function 
test('usingData existence test', () => {
  expect(usingData).toBeDefined()
});