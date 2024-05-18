// Question 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
let thirdFruit = fruits[2];
console.log(thirdFruit);
// Question 4
// Change the second element of the numbers array to 25.
numbers[1] = 25;
console.log(numbers);
// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.
fruits.push("grape");
console.log(fruits);
// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
let lastFruit = fruits.pop();
console.log(fruits);
// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
let firstFruit = fruits.shift();
console.log(fruits);
// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.
fruits.unshift("kiwi");
console.log(fruits);
// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.
fruits.splice(1, 2);
console.log(fruits);
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
fruits.splice(1, 0, "pineapple", "pear");
console.log(fruits);
// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
let citrusFruits = fruits.slice(1, 3); // slice extract element from index 1 to 2 and converet them into an arr1
console.log(citrusFruits);
// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
let lastTwoFruits = fruits.slice(2, 4);
console.log(lastTwoFruits);
console.log(fruits);
export {};
