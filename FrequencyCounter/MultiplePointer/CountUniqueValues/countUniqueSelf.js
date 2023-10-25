// [1,2,3,1,2,3,22,2] ==>  4
// [] ==> 0
// [-1,-2,-3, -1, -2, 1] ==> 4

// Write a code with time complexity as O(n) considering we are given an sorted array

function countUnique(arr) {
    let i = 0,
      j = 1;
  if(arr.length == 0) {
      return 0
  }
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
      } else {
        i++;
        arr[i] = arr[j];
        j++;
      }
    }
    return i + 1;
  }
  
  console.log(countUnique([1, 1, 2, 3, 4, 4,4,4,4,4,4, 7,7,7,7,7,7,7, 22]));