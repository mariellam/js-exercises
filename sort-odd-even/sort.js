function sortArray(array) {
  if (array.length > 0) {
    const oddSort = array.filter(item => item % 2 != 0).sort((a, b) => a - b);
    const evenSort = array.filter(item => item % 2 == 0).sort((a, b) => a - b).reverse();
    console.log(oddSort);
    console.log(evenSort);

    for (i = 0; i < oddSort.length; i++) {
      let odd = oddSort[i];
      let oddIndex = i;
      if (i = oddSort.length) {
        let oddMore = oddSort[i + 1];
      }

      console.log(odd, oddIndex, oddMore);

    }
    
    console.log(oddSort);
    
  } else {
    console.log(array);
  }
}

sortArray([5, 3, 2, 8, 1, 4, 11, 0]); // [1, 3, 8, 4, 5, 2, 11, 0])
//sortArray([2, 22, 37, 11, 4, 1, 5, 0]); // [22, 4, 1, 5, 2, 11, 37, 0])
//sortArray([1, 111, 11, 11, 2, 1, 5, 0]); // [1, 1, 5, 11, 2, 11, 111, 0])
//sortArray([]); // [])