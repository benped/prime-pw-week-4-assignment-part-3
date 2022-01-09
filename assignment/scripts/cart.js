console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull() === false) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
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


// function empty(n) {
//   n = [];
// }
// note to instructors - I can't figure out why building a function like this,
// and passing the variable 'Basket' as an argument into this doesn't clear the
// basket. Thoughts?

empty();

console.log(`This should be an empty basket: ${basket}`);



// const maxItems = 5;
// realizing this needs to be at the top for the function to run inside the
// addItem function. Interesting!

function isFull() {
  if (basket.length < maxItems){
    return false;
  } else {
    return true;
  }
}

console.log(`Is the basket full? ${isFull(basket)}`);

console.log(`Adding a kiwi: ${addItem('kiwi')}`);
console.log(`Adding a apple: ${addItem('apple')}`);
console.log(`Adding a cherry: ${addItem('cherry')}`);
console.log(`Adding a banana: ${addItem('banana')}`);
console.log(`Adding a orange: ${addItem('orange')}`);
console.log(`Adding a apple: ${addItem('apple')}`);
