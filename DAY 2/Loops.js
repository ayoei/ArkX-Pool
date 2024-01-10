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

// var num2 = 123542;

// // Your program
// let count = 0;

// while (num2 >  0) {
//   num2 = Math.floor(num2/10);
//   count++;
// }
// console.log(count);
// ==========================

let num2 = 123542;
let counter = 0;

if (num2 === 0) {
  counter = 1;
} else {
  while (num2 >= 1 || num2 <= -1) {
    num2 = num2 / 10;
    counter++;
  }
}

console.log(counter);

// Output : 6


// Task 3 :  Time to draw !
let height = 4;
for (let i = 0; i <= height; i++) {
  let space = "";
  for (let j = 0; j < height - i; j++) {
    space += " ";
  }
  let star = "*";
  for (let k = 0; k < 2 * i; k++) {
    star += "*";

  }
  let tree = space + star;
  console.log(tree);

}
let trunkSpace = " ";
let trunk = "|";
for (let i = 0; i < height - 1; i++) {
  trunkSpace += " ";
}
let trunkResult = trunkSpace + trunk;
console.log(trunkResult);

