// CommonJS (library), every file in NODE is module (by default)
// Modules - Encapsulated Code (only share minimum)
// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data);
require('./7-mind-grenade')

console.log('susan');
console.log(names.john);
console.log(names.peter);
// console.log(sayHi);
// sayHi('Susan')
// sayHi(john)
// sayHi(peter)