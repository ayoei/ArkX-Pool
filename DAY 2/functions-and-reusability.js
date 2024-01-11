// Task 1 : Going back in Time !

// ​1. factorial(n)​

function calcFactorial(num1) {
  let factorial = 1;

  for (let i = 1; i <= num1; i++) {
    factorial = factorial * i;
  }

  console.log(factorial);
}

let num1 = 5;
calcFactorial(num1);


// 2. ​nDigits(number)​

function countDigits(num2) {
  let count = 0;

  while (num2 > 0) {
    num2 = Math.floor(num2 / 10);
    count++;
  }

  console.log(count);
}

let num2 = 123542;
countDigits(num2);

// 3.​numberToDay(number)​

function getName(day) {
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
  }
}

let day = 4;
getName(day);


// 4. ​max(a, b, c)​

function findTheLargestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

let a = -15;
let b = 6;
let c = 2.6;

findTheLargestNumber(a, b, c);



// 5. ​myGrade(score)​

function whatGrade(score) {
  
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
}

let score = 83;
whatGrade(score);

// Task 2 : The Extended Factorial


function calcFactorial(num3) {
  let factorial = 1;
  
  for (let i = 1; i <= num3; i++) {
    factorial = factorial * i;
  }
  
  return factorial
}

let num3 = 5;
calcFactorial(num3);


// =========== Calculate C ============ 
function calculateC(n,p) {
  let c = calcFactorial(n) / (calcFactorial(p) * calcFactorial(n - p));
  return c;
}
calculateC(5,2) // output value = 10

// Task 3 :  The Calculator

function calculator(number1, operator, number2) {
  switch (operator) {
    case "+" :
      return number1 + number2;
    case "-" :
      return number1 - number2;
    case "*" :
      return number1 * number2;
    case "/" :
      return number1 / number2;
    case "%" :
      return number1 % number2;
    case "c" :
      return calculateC(number1 , number2);
    default :
    console.log("Invalid operation");

  }
}

// The function call should look like this :
calculator(5, "+", 1) // 6
calculator(3, "*", -4) // -12
calculator(5, 'c', 2) // 10