"use strict";

const sampleString = "My name is Antonio";

function reverseString(str) {
  // !str means `undefined`
  if (!str || typeof str !== "string") {
    return "Please provide a valid string to reverse.";
  }

  if (str.length === 1) {
    return str;
  }

  // If str.length > 1, execute below code
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

function reverseString2(str) {
  // !str means `undefined`
  if (!str || typeof str !== "string") {
    return "Please provide a valid string to reverse.";
  }

  if (str.length === 1) {
    return str;
  }

  return str.split("").reverse().join("");
}

// Valid input string
const rs = reverseString(sampleString);
console.log(rs);

// Single character
const rs1 = reverseString("a");
console.log(rs1);

// No arguments provided
const rs2 = reverseString();
console.log(rs2);

// Number instead of String
const rs4 = reverseString(123);
console.log(rs4);

// reverseString2(str)
const rs5 = reverseString("The Hut is brown in color");
console.log(rs5);

// Check if both functions are working in same way
console.log(reverseString("Hi Joe...") === reverseString2("Hi Joe..."));
