

import './style.css';
import { addToSchedule, myFormDivs } from './todo';


//to store data locally
const parentDiv = document.querySelector('.tasks');


function highEvents() {
    const addEvents = document.querySelector('#addEvents');
    const myForm = document.querySelector('#myForm');

    myFormDivs();
}


export{highEvents};