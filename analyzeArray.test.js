import analyzeArray from "./analyzeArray.js";

test("returns correct average, min, max, and length", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("works with a single-element array", () => {
  const result = analyzeArray([5]);
  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("works with negative numbers", () => {
  const result = analyzeArray([-4, -1, -7, 2]);
  expect(result).toEqual({
    average: -2.5,
    min: -7,
    max: 2,
    length: 4,
  });
});
