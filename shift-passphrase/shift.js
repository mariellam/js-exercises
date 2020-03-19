function playPass(s, n) {

  const firstShift = s.toLowerCase();
  const arrayToShift = [];

  for (i = 0; i < firstShift.length; i++) {
    let charToShift = firstShift.charCodeAt(i);

    if (charToShift >= 97 && charToShift <= 122) {
      charToShift = firstShift.charCodeAt(i) + n;
      if (charToShift >= 123) {
        charToShift = 97 + (charToShift - 123);
      }
    } else if (charToShift >= 48 && charToShift < 58) {
      charToShift = 48 + (57 - firstShift.charCodeAt(i));
    } else {
      charToShift;
    }
    arrayToShift.push(charToShift);
  }

  let shiftedArray = Array.from(arrayToShift, item => String.fromCharCode(item));

  for (i = 0; i < shiftedArray.length; i++) {
    if (i % 2 === 0) {
      shiftedArray[i] = shiftedArray[i].toUpperCase();
    }
  }

  console.log(shiftedArray.reverse().join(''));
  //return shiftedArray.reverse().join('')

}