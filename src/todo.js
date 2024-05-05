

import './style.css';


function addToSchedule(a, b, c) {
    const parentDiv = document.querySelector('.tasks');
    //parentDiv.innerHTML = '';

    const subDiv = document.createElement('div');
    subDiv.innerHTML = '';

    //const ti = a;
    //const tod = b ;
    //const dat = " " + c;

    let po = {a, b, c};

    let val = Object.values(po);
    console.log(val);

    const p1 = document.createElement('p');
    p1.textContent = val[0];
    p1.classList.add('tiTle');

    const p2 = document.createElement('p');
    p2.textContent = val[1];
    //p1.classList.add('title');

    const p3 = document.createElement('p');
    p3.textContent = c;
    //p1.classList.add('title');

    
    subDiv.append(p1,p2,p3);

    console.log(po);

    subDiv.classList.add('addDivs');

    console.log(subDiv);

    parentDiv.append(subDiv);
    parentDiv.classList.add('mainContents');
    console.log(parentDiv.textContent);


}



function myFormDivs(){

    const myForm = document.querySelector('#myForm')

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const titl = document.querySelector("#title").value;
        const todo = document.querySelector("#todo").value;
        const date = document.querySelector("#date").value;

        const pol = addToSchedule(titl, todo, date);
        console.log(pol);
        return pol;
        //myForm.style.display = 'none';
        
        
    });   
}

export{addToSchedule, myFormDivs};