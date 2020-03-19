function sortArray(array) {
  if (array.length > 0) {
    const oddSort = array.filter(item => item % 2 != 0).sort((a, b) => a - b);
    const evenSort = array.filter(item => item % 2 == 0).sort((a, b) => a - b);

    console.log(oddSort);

    /* function insertEven(){
      for (i=0; i<evenSort.length; i++) {
        const largerThanEven = (element) => element > evenSort[i];
        let oddLarger = oddSort.find(largerThanEven);
        let oddLargerIndex = oddSort.findIndex(largerThanEven);

        if (evenSort[i] < oddLarger) {
          oddSort.splice(oddLargerIndex + 1, 0, evenSort[i]);
        }
      }
    }
    insertEven(); */

    evenSort.forEach(even => {
      const largerThanEven = (odd) => odd > even + 1;
      let oddLarger = oddSort.find(largerThanEven);
      let oddLargerIndex = oddSort.findIndex(largerThanEven);
      if (even < oddLarger) {
        oddSort.splice(oddLargerIndex - 1, 0, even);
      }
    });

    console.log(oddSort);
    console.log(evenSort);
    
  } else {
    console.log(array);
  }
}

sortArray([5, 3, 2, 8, 1, 4, 11, 0]); // [1, 3, 8, 4, 5, 2, 11])
//sortArray([2, 22, 37, 11, 4, 1, 5, 0]); // [22, 4, 1, 5, 2, 11, 37, 0])
//sortArray([1, 111, 11, 11, 2, 1, 5, 0]); // [1, 1, 5, 11, 2, 11, 111, 0])
sortArray([]); // [])