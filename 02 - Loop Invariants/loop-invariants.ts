/*
  Why an algorithm is correct?
  - Initialization
  - Maintenance
  - Termination
*/

export const sumAll = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
};

//Initialization -> Before the loop start the sum is 0 and the initialization for the sumAll algorithm is true, because the sum of an empty set is zero.
// Maintenance
//          -> Before the loop starts, sum has the sum from arr[0] to arr[i - 1], so its true.
//          -> Once the loop starts, sum has the sum from arr[0] to arr[i]. So, increasing i the loop invariant holds.
//          -> When the loop finishes, sum has the sum from arr[0] to arr[arr.length], so loop invariant is true.
//Termination
//          -> the loop variable i starts in 0 and is increased by 1 in each iteration. Once i's value exceeds arr.length the loop ends.
//          -> when the loop ends the loop invariant yield an number 'sum' which is the sum of all array items, so the loop invariant its true.
//

//Now, is your turn.
//Create a function called 'max'. This function has to find the max number in an array and return it.
// Don't use Math.max() function from Math API. The idea is to create your own algorithm.
// You can test if the algorithm works running the test
