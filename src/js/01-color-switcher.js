
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

// btnStart.addEventListener("click", getRandomHexColor);
btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);

btnStop.setAttribute('disabled', true) 
let timerId = 0;

function getRandomHexColor(){
    document.body.style.backgroundColor =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onStart() {
    timerId = setInterval(getRandomHexColor, 1000)
    btnStart.setAttribute('disabled', true)  
      btnStop.removeAttribute('disabled'); 
};

function onStop () {
    clearInterval(timerId);    
    btnStart.removeAttribute('disabled') 
    btnStop.setAttribute('disabled', true) 
};



