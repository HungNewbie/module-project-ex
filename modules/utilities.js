export const formatNumber = number => {
    //convert number to string
      let numStr = String(Math.floor(number));
    // Starting 3 from the end, add a comma every 3 digits using slice() method 
    // (returns a shallow copy of a portion of an array into a new array object selected)
    for (let i = numStr.length - 3; i > 0; i -= 3) {
      numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
    }
  return numStr;
  }