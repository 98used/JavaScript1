// prompt("enter a number")
const prompt = require('prompt-sync')();
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
console.log(name);
if(name % 5 === 0){
console.log(`number ${name} is multiple of 5`);
} 
else{
    console.log(`number ${name} is not multiple of 5`);
}


// run the command "npm install prompt-sync" in terminal  to take input from the user
