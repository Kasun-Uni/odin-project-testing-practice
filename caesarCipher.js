function shiftChar(char, shift) {
  const isUpperCase = char === char.toUpperCase();
  const base = isUpperCase ? 65 : 97; // 'A' or 'a' char code

  const code = char.charCodeAt(0) - base;
  const shiftedCode = (code + shift) % 26;
  return String.fromCharCode(shiftedCode + base);
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

function caesarCipher(string, shift) {
  const normalizedShift = ((shift % 26) + 26) % 26; // handles negative/large shifts

  return string
    .split("")
    .map((char) => {
      if (!isLetter(char)) {
        return char;
      }
      return shiftChar(char, normalizedShift);
    })
    .join("");
}

export default caesarCipher;
