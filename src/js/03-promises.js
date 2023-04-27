// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

function createPromise(position, delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  const promises = [];

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promiseDelay = delay + i * step;
    const shouldResolve = Math.random() > 0.3;
    const promise = createPromise(position, promiseDelay, shouldResolve);
    promises.push(promise);
  }

  Promise.allSettled(promises).then((results) => {
    results.forEach((result) => {
      const { position, delay } = result.value || result.reason;
      if (result.status === "fulfilled") {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
  });
});