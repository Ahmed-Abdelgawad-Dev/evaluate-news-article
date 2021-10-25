// import {jest} from '@jest/globals';
// jest.useFakeTimers();
//

// Import the js file to test
import {handleSubmit} from "../src/client";
// The describe() function
describe("Testing the submit functionality", () => {
    // The test() function
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
})});