/*
  Interactive greeting using prompt-sync (TypeScript)
  - Clear naming and explicit types
  - Validates non-empty strings and positive integer age
  - Works with ts-node or compiled to JS

  Setup:
    npm i prompt-sync
    npm i -D @types/node

  Run:
    npx ts-node AI/01.ts
    # or
    tsc AI/01.ts --target ES2019 --module commonjs && node AI/01.js
*/
{
  const promptSync = require("prompt-sync");
  const prompt = promptSync({ sigint: true });

  function promptNonEmptyString(message: string): string {
    while (true) {
      const input = prompt(message).trim();
      if (input.length > 0) return input;
      console.log("Input cannot be empty. Please try again.");
    }
  }

  function promptPositiveInteger(message: string): number {
    while (true) {
      const input = prompt(message).trim();
      const value = Number(input);
      if (Number.isInteger(value) && value > 0) return value;
      console.log("Please enter a valid positive integer.");
    }
  }

  const name: string = promptNonEmptyString("Enter your name: ");
  const age: number = promptPositiveInteger("Enter your age: ");
  const language: string = promptNonEmptyString(
    "Enter the language you are learning: "
  );

  const greeting: string = `Hello, my name is ${name} and I am ${age} years old. I am learning ${language}.`;
  console.log(greeting);
}
