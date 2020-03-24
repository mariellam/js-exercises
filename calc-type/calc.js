function calcType(a, b, res) {
  const plus = a + b;
  const by = a * b;
  const minus = a - b;
  const div = a / b;

  if (res == plus) {
    return 'addition';
  } else if (res == by) {
    return 'multiplication';
  } else if (res == minus) {
    return 'subtraction';
  } else if (res == div) {
    return 'division';
  }
}
calcType(1, 2, 3);//, 'addition';
calcType(10, 4, 40);//, 'multiplication';
calcType(10, 5, 5);//, 'subtraction');
calcType(9, 5, 1.8);//, 'division');