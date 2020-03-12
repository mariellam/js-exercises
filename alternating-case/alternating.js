String.prototype.toAlternatingCase = function () {
  const chars = this.split('');
  
  const switchChars = chars.map((element) => {
    if (element == element.toLowerCase()) {
      return element.toUpperCase();
    } else {
      return element.toLowerCase();
    }
  });

  const switchString = switchChars.join('');

  return switchString;
}
console.log("hello WORLD 1a2B".toAlternatingCase());