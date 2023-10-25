// using sliding window to calculate the sum

/* 
Example: 
[1,23,12,12,123,21,21,3,123,4,123,4,1,23,1,24,12,3,124,3,2,3,14,12,3,33,321,31,123] , n=6
[1,23,12,12,123,21] we sum first six 
the to find the next sum we subsctract 1 and add next number 21 
[23,12,12,123,21,21] next sum 

we compare both to find the next max
*/

// Create a function named findMax

function findMax(arr, num) {
  // return null if the array is length is less then the given numbers
  if (arr.length < num) return null;
  // loop over the array to find the first max number in the array
  let max = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  // create a another loop stating from the n index of the array
  tempSum = max;
  for (let i = num; i < arr.length; i++) {
    // substract the first value of the last set of number and add next value of the last number in the set to get the sum of the next consecutive numbers
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare both the array sum and replace max with the max number
    max = Math.max(tempSum, max);
  }
  return max;
  // return max value
}

findMax(
  [
    1, 23, 12, 12, 123, 21, 21, 3, 123, 4, 123, 4, 1, 23, 1, 24, 12, 3, 124, 3,
    2, 3, 14, 12, 3, 33, 321, 31, 123,
  ],
  10
);

// The above code is have the complexity of O(n)
