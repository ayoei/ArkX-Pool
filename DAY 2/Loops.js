// Task 1 : Factorial

let num1 = 5;

// Your program
let factorial = 1;
for (let i = 1; i <= num1; i++) {
  factorial = factorial * i;
}
console.log(factorial);

// Output : 120



// Task 2 : How many digits ?



var num2 = 123542;

// Your program
let count = 0;

while (num2 >  0) {
  num2 = Math.floor(num2/10);
  count++;
}
console.log(count);

// Output : 6


// Task 3 :  Time to draw !

let height = 4;

// the top of the tree
for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}

// the trunk of the tree
let trunkSpaces = ' '.repeat(height - 1);
console.log(trunkSpaces + '|');
