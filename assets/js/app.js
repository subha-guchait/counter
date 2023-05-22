const count = document.getElementById("counter");
const btnIncr = document.getElementById("incr-btn");
const btnDecr = document.getElementById("decr-btn");
const inpStep = document.getElementById("step");
const btnReset = document.getElementById("res-btn");

//increment the counter
btnIncr.addEventListener("click", () => {
  if (inpStep.value) {
    count.innerText = parseInt(count.innerText) + parseInt(inpStep.value);
  }
});

//decrement the counter
btnDecr.addEventListener("click", () => {
  if (inpStep.value) {
    count.innerText = parseInt(count.innerText) - parseInt(inpStep.value);
  }
});

//reset the counter
btnReset.addEventListener("click", () => {
  count.innerText = 0;
});
