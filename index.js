var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let randomNum = Math.floor(Math.random() * 100);
 let newItem = {
   itemName: item,
   itemPrice: randomNum
 }
 cart.push(newItem)
 return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}



addToCart('bananas')
addToCart('pancake batter')
console.log(cart)
