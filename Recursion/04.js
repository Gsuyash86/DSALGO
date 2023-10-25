function collectOddValues(arr) {
    let oddValues = [];
  
    function helperOddCollector(helperInupt) {
      if (helperInupt.length === 0) return;
      if (!helperInupt[0] % 2 === 0) {
        oddValues.push(helperInupt[0]);
      }
      helperOddCollector(helperInupt.slice(1));
    }
    helperOddCollector(arr);
    return oddValues;
  }
  
  console.log(collectOddValues([1, 12, 3, 1, 12, 3, 2, 1, 23, 12, 23, 54]));
  