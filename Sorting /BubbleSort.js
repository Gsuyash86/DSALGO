function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([10, 20, 3, 31, 2, 1, 4]));
/* optimized a bit */

function bubbleSortOptimize(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] < arr[j + 1])  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
  }

  /* If over array is nearly sorted we can optimize the above code further, We can check if there are any swaps hapenning in the array we can take it as a flag */
function bubbleSort2(arr) {
    for(let i = arr.length ; i > 0 ; i--) { 
        let noSwap = true;
        for(let j = 0 ; j < i - 1 ; j++) {
           if(arr[j] > arr[j+1]) {
            [arr[j] , arr[j+1]] = [arr[j+1], arr[j]] 
            noSwap = false;
           }
        }
        if(noSwap) break;
    }
}

