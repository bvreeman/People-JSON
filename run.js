// First require the peopleJSON sent to you in the other file and get the array out 
// into a variable called peopleArray

const peopleArray = require("./peopleJSON.js");

const userArg = process.argv[2];

   let arrayOfNames = peopleArray.people.filter(person => person.age > userArg);
// console.log(arrayOfNames);

let names = arrayOfNames.map(person => person.name);

// for (i = 0; i < names.length; i++) {
//     console.log(names[i] + ' is older than ' + userArg);
// };

if (names.length > 1) {
    console.log([names.slice(0, -1).join(', '), names.slice(-1)[0]].join(names.length < 2 ? '' : ' and ') + ' are older than ' + userArg);
} else {
    console.log(names + ' is older than ' + userArg);
}




// Write a function that takes a number and an array of objects that each contain a 
// persons name and age. The function should console log out a sentence saying all the 
// people over age of the number passed in are old enough to know better. Pay attention 
// to pluralization in the strings you log out! The function should not return anything.

/**
 * This function logs out statements about the age of people who are in the array
 * @param {array} people 
 * @param {number} ageToCheck
 * @return {array}
 */

// console.log(userArg);

// const ageSorter = function(people, ageToCheck) {

    // Awesome code(probably filter and map to prepare the array then length, slice, replace and
    // lastIndexOf as well as ternaries to deal with the 'is/are' and the 'and' in the string)

    // for (i = 0; i < peopleArray.people.length; i++) {
    //     console.log(peopleArray.people[i].age);
    //         // if (peopleArray.people[i].age > ageToCheck) {
    //         //     console.log("It's connected")
    //         // }
    //     };


    //     if(isNaN(ageToCheck)){
//         console.log('You need to enter a number for this program to be useful')
//       }
//     for (i = 0; i < peopleArray.people.length; i++) {
//         let ages = peopleArray.people[i].age
//     return people.filter((ages) => ages > ageToCheck)
//     .map((elem) => { console.log(`${ages} are older than ${ageToCheck}.`)
//     return elem;
//   })
//   }

//         // console.log(`All the people over ${ageToCheck} are old enough to know better.`);
  
// }
  
// ageSorter();
    // Make sure you testing the smallest measurable units and don't worry
    // about optimizing until the problem is solved. You got this!!
  
  
  
  // Leave the function calls below commented until you get your peopleArray declared
  // (and logged!! Don't be scared to comment them back out if they are getting 
  // in the way) Dont' forget ternaries to deal with the 'is/are' and the 'and' 
  // in the string
  
  /*
  
  ageSorter(peopleArray, 36)
  //Expected output:
  // You know Josh is over 36 and old enough to know better!
  ageSorter(peopleArray, 32)
  //Expected output:
  // You know Josh, Parker and Andrea are over 32 and old enough to know better!
  
  */
  // Once you are have it solved, explore alterante syntaxes!!