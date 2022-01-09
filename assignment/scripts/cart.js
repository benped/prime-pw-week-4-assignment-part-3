console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
}
console.log(`Basket is currently ${basket}`)
console.log(`Adding a kiwi: ${addItem('kiwi')}`);
console.log(`Adding a apple: ${addItem('apple')}`);
console.log(`Basket is currently ${basket}`)

function listItems(array) {
  for (i of array) {
    console.log(i);
  }
}

//Note to self - it seems like you can't call a function that console logs
// inside a console.log - it just returns undefined.

console.log('Testing the listItems function:');
listItems(basket);

function empty() {
  basket = [];
}
