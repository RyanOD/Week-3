// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

let totalPrice = 0;
const logReceipt = (...purchasedItems) => {
  purchasedItems.forEach(item => {
  	console.log(`Item: ${item.descr} ----- Price = $${item.price}`);
    totalPrice += item.price;
  });
  console.log(`----------------------------------`);
  console.log(`Total price = $${totalPrice}`)
};

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
