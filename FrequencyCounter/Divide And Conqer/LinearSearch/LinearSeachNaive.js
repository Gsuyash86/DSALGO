function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return {
          reponse: true,
          number: arr[i],
          index: i
        };
      }
    }
    return {
      reponse: false
    };
  }
  
  console.log(linearSearch([1, 2, 3, 20, 23, 25, 45, 58, 61], 0));
  
  // The above code had the complexty of O(n) 