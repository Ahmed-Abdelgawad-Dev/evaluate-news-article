import { expect } from '@jest/globals';
import {usingData,handleSubmit,postingData} from "../src/client/js/index";


test('usingData existence test', () => {
  expect(usingData).toBeDefined()
});