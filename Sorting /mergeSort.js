const merge = (arr1, arr2) => { 
    let mergedArr = [];
    // loop which goes through all the elements in the both array 
    let i = 0, j = 0;
    while(i < arr1.length && j  < arr2.length) { 
        if( arr2[j] > arr1[i]) { 
            mergedArr.push(arr1[i])
            i++
        } 
        else { 
            mergedArr.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length) { 
        mergedArr.push(arr1[i]);
        i++
    }

    while(j < arr2.length) { 
        mergedArr.push(arr2[j])
        j++
    }
    return mergedArr
}
function mergeSort(arr) { 
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2 );
    let right = mergeSort(arr.slice(0, mid));
    let left = mergeSort(arr.slice(mid));
    return merge(right, left);
}
console.log(mergeSort([10,20,30,4,3,41,41,123,12,31,123,1,23,2,21,2]));

