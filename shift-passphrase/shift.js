/*
1. shift each letter by a given number but the transformed letter must be a letter (circular shift),
2. replace each digit by its complement to 9,
3. keep such as non alphabetic and non digit characters,
4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
5. reverse the whole result.
*/

function playPass(s, n) {
  
  let firstShift = s.toLowerCase();
  let secondShift = String;

  function shiftPass(n) {
    for (i=0; i<firstShift.length; i++) {
      if (96 < firstShift.charCodeAt(i) < 123 ) {
        charToShift = firstShift.charCodeAt(i) + n;
        console.log(secondShift.fromCharCode(charToShift));
      } else {
        charToShift = firstShift.charCodeAt(i);
        console.log(secondShift.fromCharCode(charToShift));
      }
    }
  }

  console.log(shiftPass(n));
}
playPass("I LOVE YOU!!!", 1)//"!!!vPz fWpM J");