const palindromes = function (word) {
  const remove = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    word1 = word.replace(remove, '').toLowerCase();;
    word2 = word1.replace(/\s/g, '');
    word3 = word2.split('').reverse().join('');
    // console.log(word3, word2);
    return word2 === word3;
};



// Do not edit below this line
module.exports = palindromes;
