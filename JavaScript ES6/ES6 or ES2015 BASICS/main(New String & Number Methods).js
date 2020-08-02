"use strict"

let theString = 'Hey There Guys, I am Amit Yadav & I am a B.Tech Mechanical Graduate';

console.log('STARTSWITH FUNCTION');
// STARTSWITH()
console.log(theString.startsWith('Hey'));
console.log(theString.startsWith('Amit'));

console.log('ENDSWITH FUNCTION');
// ENDSWITH()

console.log(theString.endsWith('Graduate'));
console.log(theString.endsWith('Mechanical'));

console.log('INCLUDES FUNCTION');
//INCLUDES

console.log(theString.includes('B.Tech'));
console.log(theString.includes('NIT Durgapur'));

console.log('CONVERSION OF HEXADECIMAL to DECIMAL');
//HEXADECIMAL VALUE
console.log(0xFF);
console.log(0x0F);
console.log(0xBF);
console.log(0xDF);

console.log('CONVERSION OF BINARY to DECIMAL');
//BINARY VALUE
console.log(0b10);
console.log(0b10011);
console.log(0b101101);
console.log(0b101010);
console.log(0b1011110101);

console.log('CONVERSION OF OCTAL to DECIMAL');
//OCTAL VALUE
console.log(0o24);
console.log(0o1272);
console.log(0o1750);

console.log('CHECKING THE NUMBERS IS INFINITE or NOT');
console.log(Number.isFinite(5/2));
console.log(Number.isFinite(22/7));
console.log(Number.isFinite(2^(1/2)));
console.log(Number.isFinite(11/0));

console.log('CHECKING THE NUMBERS IS NaN(Not a Number) or NOT');
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(54));
console.log(Number.isNaN(1/0));

console.log('CHECKING THE NUMBERS IS INTEGER or NOT');
console.log(Number.isInteger(2));
console.log(Number.isInteger(-68954));
console.log(Number.isInteger(5/2));
console.log(Number.isInteger(1/3));
