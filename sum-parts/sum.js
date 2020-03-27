function partsSums(ls) {
  if (ls.length > 0) {
    for (i=0; i<ls.length; i++){
      const reducedLs = ls.reduce((a, b) => a + b);
      console.log(ls, reducedLs);
      ls.shift();
      console.log(ls);
    }
  } else {
    ls = [0];
    console.log(ls);
    //return ls;
  };
}
partsSums([0, 1, 3, 6, 10]);// [20, 20, 19, 16, 10, 0];

/* const reducedLs = ls.reduce((a, b) => {
      if (a + b == 0) {
        console.log(0);
      } else {
        console.log(a + b);
      }
    });
    return reducedLs;
*/