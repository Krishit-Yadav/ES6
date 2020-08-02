"use strict"

/*
let myPromise = Promise.resolve('We are in ENDGAME now .');
myPromise.then((res) => console.log(res));
*/

/*
let myPromise = new Promise(function(resolve, reject){
  setTimeout(() => resolve(11), 1000);
});

myPromise.then((res) => {
  res += 89;
  console.log(res);
});
*/

function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}
getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
  let todos = JSON.parse(data);
  let output = '';
  for(let todo of todos){  // FOR OF LOOP for ittration
    output += `
    <div>
      <li>
        <h3>${todo.title}</h3>
        <p>completed: ${todo.completed}</p>
      </li>
    </div>
    `;
  }

document.getElementById('template').innerHTML = output;

//  console.log(data);
}).catch(function(err){
  console.log(err);
});
