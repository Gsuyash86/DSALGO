/* Write a program to find the longest Common Prefix string in an array given */


const findTheLongestPrefixStr = (arrString) => { 
    // find the shortest string length
    let minLength = Number.MAX_VALUE;
    for (const str of arrString) {
        minLength = Math.min(minLength, str.length);
    }
    // Now compare all the string characters in parallel 
    let commonPrefix = '';
    for(let i = 0 ; i < minLength; i++) {
        // Get the character from the firstString
        let char = arrString[0][i];

        if(arrString.every(str => str[i] === char)) {
            commonPrefix += char;
        }else { 
            break;
        }
    }
    return commonPrefix ? commonPrefix : undefined;
}

console.log(findTheLongestPrefixStr(['suash', 'suyyyash', 'suyma', 'suyashGUpta']))
