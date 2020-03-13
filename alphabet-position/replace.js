//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  const regex = /[a-z]/gi;
  let lowerText = text.toLowerCase().match(regex);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (lowerText == null) {
    return '';
  } else {
    lowerText.forEach(function (item, index) {
      for (i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == item) {
          item = alphabet.indexOf(alphabet[i]) + 1;
          lowerText[index] = item;
        };
      };
    });
    return lowerText.join(' ').toString();
  };
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));