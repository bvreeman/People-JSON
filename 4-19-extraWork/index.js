// Write a peopleSorter function that takes an array of objects as an argument and properly
// capitalizes all the names, sorts the people form youngest to oldest and console.logs 
//"'name' is 'age' years old". Bonus: prepend  "The youngest, " to the string of the 
// youngest and "The oldest, " to the string of the oldest person.

// First require the external file and ge the array
const Data = require('./data.js')
// console.log(Data)
/**
 * This function sorts people objects by age and logs out strings with correctly capitalized names
 * @argument {array} peopleArray
 */

const peopleSorter = peopleArray => {
    Data.people.sort((a, b) => a.age - b.age)
    .forEach((elem, i) => {
        let prepend;
        if(i === 0){
          prepend = 'The youngest, ';
        } else if(i === Data.people.length - 1) {
          prepend = 'The oldest, ';
        } else {
          prepend = '';
        }
    console.log(`${prepend}${elem.name.charAt(0).toUpperCase() + elem.name.slice(1).toLowerCase()} is ${elem.age} years old.`);
})
}

peopleSorter();