/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1) */


function areThereDuplicates(...arr) {
    // good luck. (supply any arguments you deem necessary.)
    if(arr.length < 1) { 
        return false
    }
   let obj1={};
     for(let value of arr) { 
       obj1[value] = ++obj1[value] || 1;
       if(obj1[value] > 1) return true
     }
     return false
  }

  // using multiple pointer approach 

  function areThereDuplicates1(...args) {
    args.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
   
    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
  }

// The above coede has timecompexity of nlog(n) and space complexity of O(1)