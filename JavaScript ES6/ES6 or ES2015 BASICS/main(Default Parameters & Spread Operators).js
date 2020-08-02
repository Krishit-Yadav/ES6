"use strict"

console.log('USE OF DEFAULT PARAMETERS');
console.log('');

function greet($greeting){
  console.log($greeting);
}

greet('Hello World :)');


function greet1($greeting1 = 'We are in ENDGAME now!!!'){
  console.log($greeting1);
}

greet1();

console.log('');
console.log('WITHOUT THE USE OF SPREAD OPERATORS');
console.log('');

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function test(){
  console.log(nums);
}
test.apply(null, nums);


console.log('');
console.log('WITH USE OF SPREAD OPERATORS');
console.log('');

let numbs = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

function tests(){
  console.log(numbs);
}
tests(...numbs);


console.log('');


let numbs1 = [1, 2, 3, 4, 5];
let numbs2 = [6, 7, 8, 9, 10];
let numbs3 = [11, 12, 13, 14, 15];

function test1(){
  console.log(numbs1+','+numbs2+','+numbs3);
}
test1(...numbs1,...numbs2,...numbs3);
