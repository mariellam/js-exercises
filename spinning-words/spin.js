/*
1. take String
2. find words of lenght>= 5
3. spin them
4. return new string
*/
function spinWords(s) {
  const words = s.split(' ');

  // WITH map
  const wordsSpinned = words.map(function(word){
    if (word.length > 4) {
      return word
        .split("")
        .reverse()
        .join("");
    }
    return word;
  })


  /* WITH forEach
  words.forEach(word =>
    word.length > 4
      ? wordsSpinned.push(
          word
            .split("")
            .reverse()
            .join("")
        )
      : wordsSpinned.push(word)
  ); */

  //console.log(words);
  //console.log(wordsSpinned.join(' '));

  return wordsSpinned.join(' ');
}
spinWords("Just kidding there is still one more"); //"Just gniddik ereht is llits one more"