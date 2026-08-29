"use strict"; // treat all JS code as newer version

// alert( 3 + 3 ) // we are using nodejs, not browser, so this will show reference error in node

console.log(3 + 3); // code readability should be high
console.log("Tushar");

let name = "Tushar";
let age = 21;
let isLoggedIn = false;
let state; // undefined value

// --- Primitive Data Types ---
// number => range up to 2^53 - 1
// bigint => for very large numbers
// string => ""
// boolean => true / false
// null => standalone value (representation of empty value)
// undefined => variable declared but value not assigned yet
// symbol => unique components (used in React/advanced JS)

// --- Non-Primitive Data Type ---
// object

console.log(typeof age);          // number
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (this is a well-known JS quirk)