/* Task 1: Declare a Destination Variable */
// Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination); // Output: Ancient Egypt

/* Task 2: Change the Destination */
// Change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination); // Output: Medieval Europe

/* Task 3: Declare a Constant Travel Date */
// Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. 
const travelDate = "2024-03-15";
console.log(travelDate); // Output: 2024-03-15

// Try to change the `travelDate` to another value and observe and explain what happens as a comment.
// travelDate = "2025-07-20"; // Uncommenting this will throw an error: TypeError: Assignment to constant variable.
/*
 * Observations:
 * Constants declared with `const` cannot be reassigned after their initial declaration.
 * Attempting to reassign a `const` variable results in a TypeError.
 */

/* Task 4: Experiment with Variable Hoisting */
// Before declaring any variable, try to print a variable named `timeMachineModel` to the console.
console.log(timeMachineModel); // Output: undefined

// Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`.
var timeMachineModel = "T-800";
console.log(timeMachineModel); // Output: T-800

/*
 * Observations:
 * Variables declared with `var` are hoisted, meaning the declaration is moved to the top of the scope.
 * However, the value assignment is not hoisted. When `console.log(timeMachineModel)` is called before the declaration,
 * the variable exists but is undefined until the assignment is reached.
 */
