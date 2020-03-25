/* products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399] */

function top3(products, amounts, prices) {
  const revenue = [];
  const topGrossing = [];

  amounts.forEach((amount, i) => {
    const individualRevenue = amount * prices[i];
    revenue.push(individualRevenue);
  })

  for (i=0; i<prices.length; i++){
    products.find(function (product, index) {
      let indexToRemove = revenue.indexOf(Math.max(...revenue));

      if (index == indexToRemove) {
        topGrossing.push(product);
        products.splice(indexToRemove, 1);
        revenue.splice(indexToRemove, 1);
      }
    });
  }

  console.log(topGrossing.slice(0, 3));
  //return topGrossing;

}

top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", "Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]);