import capitalize from "./capitalize.js";

test("capitalizes the first letter of a lowercase word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("does not change an already-capitalized word", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("capitalizes only the first letter, leaving the rest unchanged", () => {
  expect(capitalize("hELLO")).toBe("HELLO");
});
