const findTheOldest = function(array) {

  array.map(function(person) {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear(); 
    };
  });

  array.sort(function(a, b) {
    const firstPerson = a.yearOfDeath - a.yearOfBirth;
    const secondPerson = b.yearOfDeath - b.yearOfBirth;

    if (secondPerson < firstPerson) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(array[0]);
  return array[0];
};


// Do not edit below this line
module.exports = findTheOldest;
