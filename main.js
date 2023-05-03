import { Catserviceprof } from './Catservice'
import './style.css'
import confetti from 'canvas-confetti'

let globalFact;

pagePrepare();

function pagePrepare() {
    const button1 = document.getElementById('add-fact');
    button1.addEventListener('click', getData);
    const button2 = document.getElementById('new-fact');
    button2.addEventListener('click', getNewData);
    getNewData();
}

function getData() {
    const mainDiv = document.getElementById('app');
    if (globalFact.length !== 0) {
        fire();
        const el = globalFact.pop();
        console.log(el);

        const p = document.createElement('p');
        const textNode = document.createTextNode(el);

        p.appendChild(textNode);
        mainDiv.appendChild(p);
    }
}

function getNewData() {
    
    const mainDiv = document.getElementById('app');
    mainDiv.innerHTML='';
    Catserviceprof.getfacts().then(data => displayFact(data))
    
}

function displayFact(facts) {
    globalFact = facts;
}



function fire() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}