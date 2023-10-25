/* Recursive funtion to reverse a string */

const reserveString = (str) => {
    if(str.length === 0) return str
    return str.slice(str.length - 1) + reserveString(str.slice(0 ,str.length - 1));
  };
  
  console.log(reserveString('suyash'))
  
  
  