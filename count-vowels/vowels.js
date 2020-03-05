function getCount(str) {
  let vowelsCount = 0;
  let strChars = Array.from(str);
  let strLength = strChars.length;
  const vowels = ['a', 'e','i','o','u'];

  let strFiltered = strChars.filter (function (item) {
    return !vowels.includes(item);
  })
  
  vowelsCount = strChars.length - strFiltered.length;
  return vowelsCount;
}

console.log(getCount("teraware"));