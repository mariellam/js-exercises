function partsSums(ls) {
    let tailSum = ls.reduce((x, acc) => acc + x, 0);
    const result = [];
    ls.forEach(num => {
      result.push(tailSum);
      tailSum -= num;
    });
    result.push(0)
    return result;
}