function top3(products, amounts, prices) {

  const totalRevenues = products.map((product, i) => ({id: i, name: product, revenue: amounts[i] * prices[i]}));
  const sortedRevenues = totalRevenues.sort((a, b) => b.revenue - a.revenue || a.id - b.id);

  console.log(sortedRevenues);
  console.log(sortedRevenues.map(product => product.name).slice(0, 3));

  //return sortedRevenues.map(product => product.name).slice(0, 3);
}

top3(
  [
    "Cell Phones",
    "Vacuum Cleaner",
    "Computer",
    "Autos",
    "Gold",
    "Fishing Rods",
    "Lego",
    " Speakers"
  ],
  [0, 12, 24, 17, 19, 23, 120, 8],
  [9, 24, 29, 31, 51, 8, 120, 14]
);