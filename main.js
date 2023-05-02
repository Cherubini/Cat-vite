import './style.css'
import { Catservice } from './Catservice'
import confetti from 'canvas-confetti'

console.log('ciao');


 



  const button = document.getElementById('add-fact');
  button.addEventListener('click', displayFact);


 function get5fact() {
   const requests = [];
   for (let i = 0; i < 5; i++) {
     Catservice.getFact().then(obj=>{ requests.push(obj.fact)});
   }
   console.log(requests);
   console.log(requests.length);
   return requests;
 }


 function displayFact() {
   const mainDiv= document.getElementById('app');
   mainDiv.innerHTML='';
   fire();

   const facts= get5fact();


   for (const element of facts)  {
     const el = element.fact;
     console.log(element);

     const p = document.createElement('p');
     const textNode = document.createTextNode(el);

     p.appendChild(textNode);
     mainDiv.appendChild(p);

   }
 }


function fire() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

