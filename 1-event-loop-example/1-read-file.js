const {readfile, readFile} = require('fs')

console.log('started a first task');
// CEK FILE PATH!!!
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('complete first task');
})
console.log('starting next task');