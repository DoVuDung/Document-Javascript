const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
/**
 * Question: Iterate over the fruits array to log ` I want to eat a ...` plus the name of each fruit to the console. For example, ` I want to eat a mango`
 */
//fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))
/Chu y dong nay/
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))
/**
 * Another way to pass a callback for .forEach() is to use arrow function syntax.
 * groceries.forEach(groceryItem => console.log(groceryItem));
 * We can also define a function beforehand to be used as the callback function.
 * function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
 */
for (const fruit of fruits) {
    console.log(fruit);
}
// tuong tu nhu vong lap for ... of
