import calculator from "./calculator.js";

test("adds two positive numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("adds a negative and a positive number", () => {
  expect(calculator.add(-2, 3)).toBe(1);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("subtracts resulting in a negative number", () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("multiplies by zero", () => {
  expect(calculator.multiply(4, 0)).toBe(0);
});

test("divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divides resulting in a decimal", () => {
  expect(calculator.divide(7, 2)).toBe(3.5);
});
