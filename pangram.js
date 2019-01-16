export const isPangram = inputString => {
  if (!inputString == '') {
    let alphabet = 'a';
    let lowerInputString = inputString.toLowerCase();
    while (alphabet < 'z') {
      if (lowerInputString.indexOf(alphabet) == -1) {
        return false;
      }
      alphabet = String.fromCharCode(alphabet.charCodeAt() + 1);
    }
    return true;
  }
  return false;
};
