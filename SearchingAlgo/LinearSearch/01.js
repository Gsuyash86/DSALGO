/* write a code to find a substring in the given string */

/* Below code have the complexity of O(N)^2 */

function findSubtring(long, shortString) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < shortString.length; j++) {
        if (shortString[j] !== long[i + j]) break;
        if (j === shortString.length - 1) count++;
      }
    }
    return count;
  }
  
  console.log(findSubtring("thisis suyash gupta", "is"));

  /* We need to optimize the above the code */
