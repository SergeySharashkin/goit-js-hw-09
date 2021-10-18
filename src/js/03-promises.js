const form = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  promise = new Promise((reslove, reject) => {
setTimeout(()=>{
  if (shouldResolve) {
    reslove(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);

      }
}, delay)


  });
return promise
  
}
createPromise().then(onSucsess).catch(onError);
function onSucsess(result) {
  console.log(result)
};
function onError(error) {
  console.log(error)
}