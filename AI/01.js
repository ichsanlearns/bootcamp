/*
  Interactive greeting using prompt-sync (JavaScript version)
  - Uses clear naming and const/let
  - Validates user input for name, age, and language
  - Run with Node after installing prompt-sync

  Setup:
    npm i prompt-sync

  Run:
    node AI/01.js
*/

const prompt = require("prompt-sync")({ sigint: true });

function promptNonEmptyString(message) {
  // Keep prompting until a non-empty string is provided
  // Trims to avoid accepting whitespace-only input
  // Returns the validated string
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const input = prompt(message).trim();
    if (input.length > 0) return input;
    console.log("Input cannot be empty. Please try again.");
  }
}

function promptPositiveInteger(message) {
  // Keep prompting until a valid positive integer is provided
  // Returns the validated number
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const input = prompt(message).trim();
    const value = Number(input);
    if (Number.isInteger(value) && value > 0) return value;
    console.log("Please enter a valid positive integer.");
  }
}

const name = promptNonEmptyString("Enter your name: ");
const age = promptPositiveInteger("Enter your age: ");
const language = promptNonEmptyString("Enter the language you are learning: ");

const greeting = `Hello, my name is ${name} and I am ${age} years old. I am learning ${language}.`;
console.log(greeting);
