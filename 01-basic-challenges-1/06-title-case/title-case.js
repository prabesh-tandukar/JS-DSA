function titleCase(str) {
  let splited = str.split(" ");
  console.log(splited);
  let length = splited.length;
  let final = "";
  console.log(length);
  for (let i = 0; i < length; i++) {
    let firstWord = splited[i].slice(0, 1);
    firstWord = firstWord.toUpperCase();
    console.log(firstWord);
    let remainingWords = splited[i].slice(1, str.length);
    remainingWords = remainingWords.toLowerCase();
    console.log(remainingWords);
    let titleCase = firstWord + remainingWords;
    console.log(titleCase);

    final += titleCase + " ";
  }
  final = final.trim();

  return final;
  // firstWord = firstWord.toUppercase();
  // remainingWords = remainingWords.toLowercase();
  // titleCase;
}

module.exports = titleCase;
