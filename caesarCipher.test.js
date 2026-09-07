import caesarCipher from "./caesarCipher.js";

test("shifts simple lowercase letters", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps around from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves letter case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("leaves punctuation and spaces unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("wraps around from Z to A (uppercase)", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("returns the same string when shift is 0", () => {
  expect(caesarCipher("Hello", 0)).toBe("Hello");
});

test("handles a shift larger than 26 by wrapping correctly", () => {
  expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = 3
});
