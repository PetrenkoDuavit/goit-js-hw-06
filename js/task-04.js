// const myButtons = document.getElementById("counter");
// console.log(myButtons);
const ref = {
  counterValue: 0,
  counter: document.getElementById("value"),

  decr: document.querySelector("button[data-action='decrement']"),
  incr: document.querySelector("button[data-action='increment']"),
  myValue: document.querySelector("#value"),
};

ref.decr.addEventListener("click", () => {
  ref.counterValue--;
  ref.counter.textContent = ref.counterValue;
  //   console.log(`${ref.counterValue}`);
});

ref.incr.addEventListener("click", () => {
  ref.counterValue++;
  ref.counter.textContent = ref.counterValue;
  //   console.log(`${ref.counterValue}`);
});

// Решено+++++++++++++++++++++++++++++++++++++
