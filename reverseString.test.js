import reverseString from "./reverseString.js";

test("reverses a simple word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a word with mixed case", () => {
  expect(reverseString("HeLLo")).toBe("oLLeH");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("returns an empty string when given an empty string", () => {
  expect(reverseString("")).toBe("");
});
