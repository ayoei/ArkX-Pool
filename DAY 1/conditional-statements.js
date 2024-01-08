// Conditional Statements

// Task 1 : Even or Odd

let number = 13;
if (number % 2 === 0) {
  console.log(number + " is Even");
} else {
  console.log(number + " is Odd");
}

// Task 2 :  Days of the week

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
};

// Task 3 : Maximum
let a = -15;
let b = 6;
let c = 2.6;


// your program goes here
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

// should output : 6

// Task 4 : The Teacher

let score = 83;

if (score > 85) {
  console.log("grade is A");
} else if (score <= 85 && score > 70) {
  console.log("grade is B");
} else if (score <= 70 && score > 55) {
  console.log("grade is C");
} else if (score <= 55 && score > 40) {
  console.log("grade is D");
} else if (score <= 40 && score > 15) {
  console.log("grade is E");
} else if (score <= 15) {
  console.log("grade is F");
}
