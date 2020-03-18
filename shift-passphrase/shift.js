/*
1. shift each letter by a given number but the transformed letter must be a letter (circular shift),
2. replace each digit by its complement to 9,
3. keep such as non alphabetic and non digit characters,
4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
5. reverse the whole result.
*/

function playPass(s, n) {
  
  const firstShift = s.toLowerCase();
  let arrayToShift = [];

  for (i = 0; i < firstShift.length; i++) {
    let charToShift = firstShift.charCodeAt(i);

    if (charToShift >= 97 && charToShift < 122) {
      charToShift = firstShift.charCodeAt(i) + n;
    } else if (charToShift == 122) {
      charToShift = 97;
    } else if (charToShift >= 48 && charToShift < 58) {
      charToShift = 48 + (57 - firstShift.charCodeAt(i));
    } else {
      charToShift;
    }
    arrayToShift.push(charToShift);
  }
  
  let shiftedArray = Array.from(arrayToShift, item => String.fromCharCode(item) );

  for (i = 0; i < shiftedArray.length; i++) {
    if (i % 2 === 0) {
      shiftedArray[i] = shiftedArray[i].toUpperCase();
    }
  }

  console.log(shiftedArray.reverse().join(' ').toString());
  //return shiftedArray.reverse().join(' ').toString();

}
playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2);