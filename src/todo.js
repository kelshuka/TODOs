

import './style.css';


function addToSchedule(a, b, c) {
    const parentDiv = document.querySelector('.tasks');
    //parentDiv.innerHTML = '';

    const subDiv = document.createElement('div');
    subDiv.innerHTML = '';


    let po = {a, b, c};

    let val = Object.values(po);
    console.log(val);

    const p1 = document.createElement('p');
    p1.textContent = val[0];
    p1.classList.add('tiTle');

    const p2 = document.createElement('p');
    p2.textContent = val[1];
    

    const p3 = document.createElement('p');
    p3.textContent = c;
    
    const butt = document.createElement('button');
    butt.innerHTML = 'X';


    function ret() {
        subDiv.remove();
    };
    butt.addEventListener('click', ()=> {
        ret();
    })

    
    subDiv.append(p1,p2,p3, butt);

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