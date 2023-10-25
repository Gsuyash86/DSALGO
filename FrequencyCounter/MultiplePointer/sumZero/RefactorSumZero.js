function sumZero(arr) {
    // take 2 pointer left and right
    let left = 0,
      right = arr.length - 1;
    // loop over arr such that left less then right as we have the sorted array
  
    while (left < right) {
      let sum = arr[left] + arr[right];
      // in loop check if the sum of left and right are equal to 0
      if (sum === 0) {
        // return value if zero
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        // if value larger then zero , reduce pointer from right
        right -= 1;
      } else {
        // else increase pointer from left
        left += 1;
      }
    }
  }
  
  console.log(sumZero([-5, -2, -1, 0, 1, 2, 3, 6]));
  

  // The above code has the compexity of O(n)