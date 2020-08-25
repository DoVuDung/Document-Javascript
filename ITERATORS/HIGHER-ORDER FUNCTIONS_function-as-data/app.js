const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
//create a shorter-named variable
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
//Invoke function = call function
is2p2();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
console.log(is2p2.name);
console.log(is2p2.lenght);

console.log(is2p2.displayName);