function partsSums(ls) {
  const newArray = [];
  newArray.length = ls.length;
  newArray.fill(0);
  newArray[0] = ls[ls.length - 1] || 0;
  if (ls.length === 0) {
    return newArray;
  }
  for (let i = 1; i < ls.length; i++) {
    newArray[i] = newArray[i - 1] + ls[ls.length - i - 1];
  }
  newArray.reverse();
  newArray.push(0);
  return newArray;
}