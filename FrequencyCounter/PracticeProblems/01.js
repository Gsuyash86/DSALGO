/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N) */

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) { 

    let obj1= {};
     num1 = num1.toString();
     num2 = num2.toString()


    if(num1.length !== num2.length) { 
        return false
    }

    for(let value of num1) {
        obj1[value] = ++obj1[value] || 1;
    }

    for(let value of num2) { 
        if(!(value in obj1)) { 
                return false;
        }
        if(!(obj1[value])) { 
            return false;
        }
        else { 
            obj1[value] -= 1;
        }
    }
    return true;
}

