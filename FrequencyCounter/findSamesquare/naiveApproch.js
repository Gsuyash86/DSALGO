// write a fun names same with takes two array as an input

function same(arr1 = [], arr2 = []) {
    // check if the both the array have same frequency return false if not
    if (arr1.length !== arr2.length) {
      return false;
    }
    // loop over on the array
    for (let i = 0; i < arr1.length; i++) {
      // check if the value present in second array return false if not present
      let correctIndex = arr2.indexOf(arr1[i] ** 2);
  
      if (correctIndex === -1) {
        return false;
      }
      // Remove the value from the second array to avoid same comparioson
      arr2.splice(correctIndex, 1);
    }
    return true;
    // return true
  }
  
  console.log(same([1, 10, 3, 2], [100, 2, 4, 9]));
  
  // The above code have the complexity of o(n) -- as we are using the 
  