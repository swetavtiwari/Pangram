export const isPangram = inputString => {
  if (!inputString == '') {
    let alphabet = 'a';
    while (alphabet < 'z') {
      if (inputString.indexOf(alphabet) == -1) {
        return false;
      }
      alphabet = String.fromCharCode(alphabet.charCodeAt() + 1);
    }
    return true;
  }
  return false;
};
