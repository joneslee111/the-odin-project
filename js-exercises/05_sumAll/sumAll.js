const sumAll = function(int1, int2) {
  let sum = 0;
  

  // checks to see if either in1 or int2 is an integer
  // checks to see if either int1 or int2 is less than 0
  // returns 'ERROR' if true
  if ((!Number.isInteger(int1) || !Number.isInteger(int2)) || ((int1 < 0) || (int2 < 0))) {
    return 'ERROR'
  };
  
  // checks to see if int1 is greater than int2
  // reassigns
  if (int1 > int2) {
    let temp = int1;  
    int1 = int2;
    int2 = temp;
  }

  // cycles through each number between int1 and int2
  // adds i to the vairable sum for eavh number between the two ints
  for (i = int1; i < int2 + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
