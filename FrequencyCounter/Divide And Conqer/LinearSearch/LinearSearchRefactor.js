// If we are given an sorted array 

// write a function linerSort 
function linearSort(arr, num) { 

    // assign 2 pointers  - min and max where min will the 0 and max will the last value 
    let min = 0, max = arr.length - 1 ;
    // loop over array until we min <=max 
    while(min <= max) { 
  
      // find the mid value of the array 
      let middle = Math.floor((min + max) / 2);
      
      // check weather the value if larger or greater then mid value 
      if(arr[middle] < num) {
        // if value is larger -- min =  mid + 1 
         min = middle + 1 ;
      }else if(arr[middle] > num) { 
        // if value is less then middle vlaue -- max = mid -1 
          max = middle - 1;
      }else{ 
        // return middle value if value is equal 
        return middle
      }
    }
    // return -1 not for not found value
    return -1
  }
  
  console.log(linearSort([1, 2,3,4,5,6,7,8,11, 15, 20 , 21, 26,28,45 , 66, 78 ], 45))
  
  