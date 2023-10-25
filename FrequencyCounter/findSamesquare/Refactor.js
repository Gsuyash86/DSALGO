function same(arr1 = [], arr2=[]) { 

    // make two objects with keys 
    let obj1 = {} , obj2 ={} ;
    // loop over both arrays and seperate then againt there keys
    for(let value of arr1) { 
        obj1[value] = ++obj1[value] || 1 ; 
    }
    for(let value of arr2) { 
        obj2[value] = ++obj2[value] || 1 ; 
    }
    // loop over first array and check weather the both objects must the same frequency of number and second obj must have the keys sqaured
  
    for(let key in obj1) { 
        if(!(key ** 2 in obj2)) { 
            return false
        }
        if(!(obj2[key ** 2] === obj1[key])) { 
            return false
        }
    }
    return true
  }
  
  

  // This is better approach as the performance would be far better compred to the nested loop in js