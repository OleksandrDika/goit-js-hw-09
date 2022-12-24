
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

btnStart.addEventListener("click", getRandomHexColor);
btnStop.addEventListener("click", onStop);

btnStop.setAttribute('disabled', true) 

function getRandomHexColor() {
    timerId = setInterval(() => {
        return document.body.style.backgroundColor =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;;
      }, 1000);  
      btnStart.setAttribute('disabled', true)  
      btnStop.removeAttribute('disabled')        
};

function onStop (even) {
    clearInterval(timerId);    
    btnStart.removeAttribute('disabled') 
    btnStop.setAttribute('disabled', true) 
}



