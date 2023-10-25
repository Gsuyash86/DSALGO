function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  
    return false;
  }
  
  console.log(sumZero([-3, -2, -1, 0, 2]));
  
  // The above code has the complexity of  O(n^2)