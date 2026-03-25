import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  //write your code here


const generadorExcuses = (list) => {
  return Math.floor(Math.random() * list.length);
}

  const iwho = generadorExcuses(who);
  const iaction = generadorExcuses(action);
  const iwhat = generadorExcuses(what);
  const iwhen = generadorExcuses(when);

 document.getElementById("excuses").innerHTML = 
    `${who[iwho]} ${action[iaction]} ${what[iwhat]} ${when[iwhen]}`;
};