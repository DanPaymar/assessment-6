const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    const returnValue = shuffle();
    expect(Array.isArray(returnValue)).toBe(true);
  });

  test('have the same length as the argument', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr.length).toBe(arr.length);
  });

  
});
