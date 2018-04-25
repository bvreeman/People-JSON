// Write a function that takes a string and returns an object 
// representing the character count for each letter.

// const letterCounter = string => {
  // Awesome code here!! Use you mdn .reduce() docs!!
 let letters = 'abbcccddddeeeee'
 let name;
 let lettersArray = Array.from(letters);
//  console.log(lettersArray);
var countedLetters = lettersArray.reduce(function (allLetters, letter) { 
  if (letter in allLetters) {
    allLetters[letter]++;
  }
  else {
    allLetters[letter] = 1;
  }
  return allLetters;
}, {});
console.log(countedLetters);

// };

// const result = letterCounter('abbcccddddeeeee')
// console.log(result)
// Expected Output:
// {a:1, b:2, c:3, d:4, e:5}