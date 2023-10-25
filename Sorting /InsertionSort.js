function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
        let j = i - 1;
      for ( j ; j > -1 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
        console.log("@@JLOOP", currentValue, arr[j], j);
      }
      arr[j + 1] = currentValue;
      console.log("@@ILOOP", currentValue, arr[i], i);
    }
    return arr;
  }
  
InsertionSort([2, 1, 4, 5, 12, 3]);
  