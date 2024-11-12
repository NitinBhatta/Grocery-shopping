let apple;
let milk;
let bread;

apple = 120;
milk = 100;
bread = 50;

let totalcost = apple + milk + bread;
console.log(totalcost);

let discount = 0; // Initialize discount
if (totalCost > 50) {
  discount = totalCost * 0.1; // 10% discount
}

// Calculate the final total after applying the discount
let finalTotal = totalcost - discount;

// Output the results
console.log("Total cost before discount: $" + totalCost);
console.log("Discount applied: $" + discount);
console.log("Final total after discount: $" + finalTotal);
