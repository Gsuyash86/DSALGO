// Write a code find the max sum in an array adding n consecutive numbers

// The naive version with complexity of O(n^2)

let arr = [3, 5, 6, 2, 4, 8, 3, 5, 6];

function findMax(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num - 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[j + i];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(findMax(arr, 2));

// Major problem is if there very large amount numbers in array , this would create performance issue 

