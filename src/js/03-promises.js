import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const btnSub = document.querySelector('button[type=submit]')

form.addEventListener('input', onInput)
btnSub.addEventListener('click', onSubmit)

function onInput(even) {
  const firstDelay = form.delay.value;
  const delayStep = form.step.value;
  const amount = form.amount.value;  
  return result = {firstDelay, delayStep, amount}  
}

function onSubmit(even) {
  btnSub.setAttribute('type', 'button'); 
  setTimeout(() => {
    
    for (let index = 1; index <= result.amount; index++) {
      
        createPromise(index, result.delayStep);     
      
    } 
  }, result.firstDelay);
   
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
};

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//     // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
