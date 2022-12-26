// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,    
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      chekingDate(selectedDates);
    },
};



const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');

input.addEventListener('input', onInputDate);
btn.addEventListener('click', onclick);

const fp = flatpickr(input, options);

btn.setAttribute('disabled', true) 

function onclick (event) {
  timer.start()
};

const timer = {
  isActive: false,
  start(){
    if (this.isActive) {
      return
    }    
    this.isActive = true;

   let intId = setInterval(() => {
      const startTime = Date.now();
      const currentTime = new Date(input.value);
      const rrr = currentTime -startTime;
      if (rrr <= 0 ) {
        return clearInterval(intId)
      }
      const {days, hours, mins, secs} = getTimeComponents(rrr)
      updateTimer({days, hours, mins, secs})
      console.log(`${days}:${hours}:${mins}:${secs}`)     
      
    }, 1000);
  }
}

function getTimeComponents (time) {
  const days = pad( Math.floor(time/(1000*3600*24)));
  const hours =pad( Math.floor((time % (1000*60*60*24)/(1000*60*60))));
  const mins = pad(Math.floor((time % (1000*60*60)/(1000*60))));
  const secs = pad(Math.floor((time % (1000*60)/1000)));
  return {days, hours, mins, secs};
}

function pad (value) {
  return String(value).padStart(2, '0');
}

function onInputDate(event) {

 const dateCurrent = new Date()
 const dateChanged = new Date(input.value)

 if (dateCurrent < dateChanged) {
  btn.removeAttribute('disabled')  
 } else {  
  Notiflix.Notify.failure('Please choose a date in the future');
 }
};

const textDays = document.querySelector('span[data-days]');
const textHours = document.querySelector('span[data-hours]');
const textMinutes = document.querySelector('span[data-minutes]');
const textSeconds = document.querySelector('span[data-seconds]');

function updateTimer ({days, hours, mins, secs}) {
  textDays.textContent = `${days}`;
  textHours.textContent = `${hours}`;
  textMinutes.textContent = `${mins}`;
  textSeconds.textContent = `${secs}`;
  
}





