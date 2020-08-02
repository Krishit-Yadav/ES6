"use strict"

function *gen1() {
  console.log('Hey There World');
  yield 'Yaa, the Yield 1 is Ran...';
  console.log('My name is Amit Yadav');
  yield 'Okay, the Yield 2 is also Ran....';
  console.log('I am a B.Tech Mechanical Graduate of NIT, Durgapur');
  yield 'Yup, the Yield 3 is also Ran....';
  return 'Returned.....'
}

var g = gen1();
/*
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
*/

for(let value of g){
  console.log(value);
}
