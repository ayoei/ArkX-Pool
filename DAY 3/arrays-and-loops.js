// Task 1 : Speed run !!

// === sum(numbers): ===
// a function to calculate the sum of the numbers

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

let numbersArray = [5 , 10 , 20];
let result = sum(numbersArray);
console.log(result);


// === countEven(numbers): === 

function totalEvenNumbers(randomNumbers) {
  
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
      total += 1;
    }
  }
  return total;
}

let total = 0;
let randomNumbers = [1, 2, 3, 4, 5, 6];
console.log(totalEvenNumbers(randomNumbers));


// === double(numbers): ===


function arrMultiplication(arrOfNumbers) {
  for (let i = 0 ; i < arrOfNumbers.length; i++) {
    arrOfNumbers[i] = arrOfNumbers[i] * 2;
  }
  return arrOfNumbers;
}
let arrOfNumbers = [4, 2, 7];
console.log(arrMultiplication(arrOfNumbers));

// Task 2 : The pair of socks

function sockPairs(socks) {
  let sockCount = {};
  let pairs = 0;

  // a for loop to count the occurrences of each color
  for (let i = 0; i < socks.length; i++) {
    let color = socks[i];
    sockCount[color] = (sockCount[color] || 0) + 1;
  }

  // Calculate the number of pairs for each color
  for (let color in sockCount) {
    pairs += Math.floor(sockCount[color] / 2);
  }

  return pairs;
}

console.log(sockPairs([1, 2, 1, 2, 1, 3, 2]));