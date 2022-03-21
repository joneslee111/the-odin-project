const ftoc = function(fahrenheit) {
  let celsiusTemp = ((fahrenheit - 32) * 5/9);

  if (celsiusTemp === 0) {
    return celsiusTemp;
  } else {
    let oneDec = celsiusTemp.toFixed(1);
    let parsedInt = Number(oneDec);
    return parsedInt;
  }
};

const ctof = function(celsius) {
  let fTemp = (celsius * 9/5 + 32);
  let oneDec = fTemp.toFixed(1);
  let parsedInt = Number(oneDec);
  
  return parsedInt;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
