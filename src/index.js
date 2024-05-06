

import './style.css';
//import { highEvents, showDataBase } from './highEvents';
import { highEvents } from './addTodo';


const container = document.querySelector('.container');
container.classList.add('containerMain');

const heaDing = document.querySelector('.heaDing');
heaDing.classList.add('header');

const sideBar = document.querySelector('.sideBar');
sideBar.classList.add('sidebar');
//sideBar.classList.add('buttns');

const content = document.querySelector('#content');
content.classList.add('mainBar');

const addEvents = document.querySelector('#addEvents');
const events = document.querySelector('#event');
const myForm = document.querySelector('#myForm');


function dataStorage(){
    localStorage.setItem("data",parentDiv.innerHTML)
}

addEvents.addEventListener('click', ()=> {
    myForm.style.display = 'block';
    highEvents();
    cler.style.display = 'block';
    dataStorage();
    
});

function fun(){
    //document.getElementById("myForm").reset();
    document.getElementById("myForm").style.display = 'none';
}

const cler = document.getElementById('cler');
cler.classList.add('cler');

cler.addEventListener('click', ()=> {
    fun();
    cler.style.display = 'none';
})

const parentDiv = document.querySelector('.tasks');

events.addEventListener('click', ()=> {
    parentDiv.style.display = 'grid';
    document.getElementById("myForm").style.display = 'none';
    cler.style.display = 'none';
})



function showDataBase(){
    parentDiv.innerHTML = localStorage.getItem("data")
}

showDataBase();




