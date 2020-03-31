function partsSums(ls) {
  const shiftLs = Array.from(ls);
  const sumArray = [];

for (i = 0; i < ls.length; i++) {
  const sumAll = shiftLs.reduce((a, b) => a + b);
  sumArray.push(sumAll);
  shiftLs.shift();
}
if (ls.length === 0 || shiftLs.length === 0) sumArray.push(0);

//console.log(sumArray);
return sumArray;
}
partsSums([0, 1, 3, 6, 10]);// [20, 20, 19, 16, 10, 0];

// This solution Times Out in CW.