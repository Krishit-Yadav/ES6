"use strict"

/*
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(array){
  // let self = this;
  return array.map((e) => {
    console.log(this.prefix + e);
  });
}

let pre = new Prefixer('Hey There ');
pre.prefixArray(['SURAJ', 'ANKIT', 'SAIRAM', 'CHAITANIYA']);
*/

/*

let add = function(x,y){
  let sum = x+y;
  console.log(sum);
  return false;
}
add(99,111);
*/

let subs = (x,y) => {
  let subs = x-y;
  console.log(subs);
  return false;
}
subs(99,111);

let product = (x,y) => {
  let product = x*y;
  console.log(product);
  return false;
}
product(15,20);
