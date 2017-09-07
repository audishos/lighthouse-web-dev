var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  const salesTax = {};

  // iterate through each company in salesData
  salesData.forEach(function(element) {
    // initialize the results object for the company
    if (salesTax[element.name] === undefined) {
      salesTax[element.name] = { totalSales : 0, totalTaxes : 0 };
    }
    // calculate the total sales
    let salesTotal = 0;
    let taxTotal = 0;
    element.sales.forEach(function(sale) {
      salesTotal += Number(sale);
    }, this);
    // add the total sales to the company object
    salesTax[element.name].totalSales += salesTotal;
    // calculate the sales tax
    //let taxRate = taxRates[element.province];
    salesTax[element.name].totalTaxes += salesTotal * taxRates[element.province];
  }, this);

  return salesTax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
