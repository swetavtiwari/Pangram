export const isPangram = (sentence) => {
  let asciiValue = 96;
  const numberOfAlphabets = 26;
  const lowerCaseAlphabets = [...Array(numberOfAlphabets)].map(() => {
    asciiValue += 1;
    return String.fromCharCode(asciiValue);
  });
  const lowerCaseSentence = sentence.toLowerCase();
  return lowerCaseAlphabets.every(alphabet => lowerCaseSentence.includes(alphabet));
};
