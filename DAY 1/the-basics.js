// The Basics
// Task 1 :  Warm up
let firstname = "ayoub";
let lastname = "el haraoui";
const PI = 3.14;
let radius = 7;
let favoriteSuperHero = "Spider-Man";
let favoriteQuote= "Don't just Dream, Set Goals";

// Task 2 :  Speed run

// 1.Tell Your name: 
let fullName = firstname + " " + lastname;
console.log(fullName);

// 2.Maths:
let r = radius;
let area = PI * (r ** 2);
console.log(area);
let primeter = 2 * PI * r;
console.log(primeter);


// 3.Motivation:
let motivation = "A wise man named " + favoriteSuperHero + ": " + favoriteQuote;
console.log(motivation);

//Task 3 :  Variable swap

let a = 3;
let oldValue = a;
let b = 10;
a = b;
b = oldValue;

// Swap the values of a and b here

console.log("After swapping: a = ", a, " and b = ", b); // should output: After swapping: a = 10 and b = 3
