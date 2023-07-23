const refs = {
  counter: document.getElementById("value"),
  decr: document.querySelector("button[data-action='decrement']"),
  incr: document.querySelector("button[data-action='increment']"),
};

let counterValue = 0;
refs.decr.addEventListener("click", () => {
  counterValue--;
  refs.counter.textContent = counterValue;
});

refs.incr.addEventListener("click", () => {
  counterValue++;
  refs.counter.textContent = counterValue;
});
