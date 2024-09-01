function isPalindrome(str) {
  const og = str.toLowerCase();
  let theRealOg = "";
  for (let i = 0; i < og.length; i++) {
    // console.log(og[i]);
    if (og[i] == " " || og[i] == ",") {
      continue;
    }
    theRealOg += og[i];
  }
  //   console.log(theRealOg);
  let reversed = "";
  for (let i = theRealOg.length - 1; i >= 0; i--) {
    reversed += theRealOg[i];
  }

  return theRealOg == reversed;
}

module.exports = isPalindrome;
