// sample recusive fuction 

/* Wrtie a code to countdown of a number */

function countDown (n) { 

    if(n > 0) { 
        console.log("ALL DONE")
    }
    console.log(`${n}.....`)
    n--;
    countDown(n);
}