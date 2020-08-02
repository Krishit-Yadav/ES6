"use strict"

/*
let myArray = [1, 4, 9, 16, 25, 36, 49, 64, 81,100];
let mySet = new Set(myArray);

mySet.add(121);
mySet.add('Squares of Numbers from 1 to 11');
mySet.add({A: 1, B: 2, C: 3, D:4});
mySet.delete(1);
// mySet.clear();
mySet.add('New Set of Cubes');
mySet.add(1);
mySet.add(8);
mySet.add(27);
mySet.add(64);
mySet.add(125);
mySet.add(216);
mySet.add(343);
mySet.add(512);
mySet.add(729);
mySet.add(1000);
//console.log(mySet);
//console.log(mySet.size);


mySet.forEach(function (val) {
  console.log(val);
});
*/

/*
let myMap = new Map([['a1', 'Hey There'], ['a2', 'World, Its me Amit Yadav.'], ['a3', 'Okay! GoodBye']]);
myMap.set('b1', 'Hey There');
myMap.delete('a3');
console.log(myMap);
console.log(myMap.size);
*/

/*
let bikeWeakSet = new WeakSet();

let bike1 = {
    company: 'KRIN',
    model: '1500 RP',
    horsePower: '600 HP'
}

let bike2 = {
    company: 'BAJAJ',
    model: '200 NS',
    horsePower: '30 HP'
}

let bike3 = {
    company: 'BMW',
    model: 'S 1000 RR',
    horsePower: '205 HP'
}

bikeWeakSet.add(bike1);
bikeWeakSet.add(bike2);
bikeWeakSet.add(bike3);

bikeWeakSet.delete(bike2);
console.log(bikeWeakSet);
*/

let bikeWeakMap = new WeakMap();

let key1 = {
  id: 1
}
let bike1 = {
    company: 'KRIN',
    model: '1500 RP',
    horsePower: '600 HP'
}


let key2 = {
  id: 2
}
let bike2 = {
    company: 'BMW',
    model: 'S 1000 RR',
    horsePower: '205 HP'
}

bikeWeakMap.set(key1, bike1);
bikeWeakMap.set(key2, bike2);

bikeWeakMap.delete(key1, bike1);
console.log(bikeWeakMap);
