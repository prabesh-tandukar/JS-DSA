function countVowels(str) {
  let lowerStr = str.toLowerCase();
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (lowerStr[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

module.exports = countVowels;
