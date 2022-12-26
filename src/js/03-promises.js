import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const btnSub = document.querySelector('button[type=submit]')

form.addEventListener('input', onInput)
btnSub.addEventListener('click', onSubmit)

let result = {};
function onInput(even) {  
  const delay = Number (form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);  
  return result = {delay, step, amount}  
};

function onSubmit(even) {
  btnSub.setAttribute('type', 'button'); 
      
    for (let index = 1; index <= result.amount; index++) {
      
        createPromise(index, result.delay)
          .then(({ position, delay }) => {
              Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);             
            })
           .catch(({ position, delay }) => {
              Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);             
            });    
      result.delay += result.step
    }     
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }}, delay)
    })};
