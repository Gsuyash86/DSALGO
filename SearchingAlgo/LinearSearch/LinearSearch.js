let arr = [1,10, 203,3,50];


function findNum(arr, num) { 
  for(let i = 0 ; i< arr.length ; i++) { 
    if(arr[i] === num ) return i
      }
    return -1
}

console.log(findNum(arr, 2));