const add = function(num1, num2) {
	// returning a variable that is addition of the two parameters
  num3 = num1 + num2;
  return num3;
};

const subtract = function(num1, num2) {
	// returning a variable that is subtraction of the two parameters
  num3 = num1 - num2;
  return num3;
};

const sum = function(arr) {
  // create a variable called sum and set it to 0
  let sum = 0
  // a for loop that loops through the length of the parameter (arr)
  // for ever loop i is increased by 1
  for (let i = 0; i < arr.length; i++) {
    // gives sum the value of sum + arr (at the position of i)
    sum = sum + arr[i];
    // for example above, if a parameter of [1, 2, 3] is passed through
    // as it loops sum, the first one will be 0 + 1[0] so sum will eqaul 1
    // then it will be 1 + 2[1], so sum will eqaul 3
    // lastly, 3 + 3[2], so sum will equal and returning 6
  }
  return sum;
};

const multiply = function(arr) {
  // a variable called sum is set at 1
  // if it was set to 0 then multiplicaiton wouldnt work because 0 * num = 0
	let sum = 1;
  // a for loop that iterates through the length of arr and adds 1 to i
  for (let i = 0; i < arr.length; i++) {
    // sum is now set at the total of sum * arr[at the position of i]
    sum = sum * arr[i];
    // as before, if the parameter was [1, 2, 3]
    // the first one would be 1 * 1[0], so sum = 1
    // then it would be 1 * 2[1], so sum then = 2 
    // lastly, it would be 2 * 3[2], so sum would = 6
    // 6 would be returned
  };
  return sum;
};

const power = function(num1, num2) {
  num3 = num1 ** num2;
  return num3;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
