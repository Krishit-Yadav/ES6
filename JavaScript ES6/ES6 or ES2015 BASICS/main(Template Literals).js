"use strict"

/*
let template = '<h1>Hello World</h1>'+
 '<p>This a message to the world from Amit Yadav</p>'+
 '<p> 5 Rafales Landed safely in INDIA. ';
*/

let name = 'Suraj';

function makeUpperCase(word){
  return word.toUpperCase();
}


let template = `<h1>${makeUpperCase('Over & Out')}, ${name}</h1>
 <p>This a message to all the squats in Iraq from your General</p>
 <p> The terrorist group is fully inactive now. `;

document.getElementById('template').innerHTML = template;
