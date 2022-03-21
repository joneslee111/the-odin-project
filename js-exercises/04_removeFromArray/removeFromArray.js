// using the rest parameter => it allows a function to 
// accept an indefinite number of arguments as an array.
const removeFromArray = function(...args) {
  // this pulls out the first item on the list, the array.
  const array = args[0];
  // this creates a new empty array
  const newArray = [];
  // forEach cycles through the array
  array.forEach((item) => {
    // this pushes every element into the new array
    // unless it is included in the function arguments
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // this returns the new array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
