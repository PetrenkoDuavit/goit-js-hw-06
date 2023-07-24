function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumEl = document.querySelector("#controls input");
const boxesEl = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
let width = 30;
let height = 30;

btnCreate.addEventListener("click", (e) => {
  createBoxes(inputNumEl.value);
});

btnDestroy.addEventListener("click", (e) => {
  // for (let i = 0; i < inputNumEl.value; i++) {
  //   const divsElBoxes = boxesEl.querySelector('div');
  //   divsElBoxes.remove();
  // }
  const divsElBoxes = boxesEl.querySelectorAll("div");
  divsElBoxes.forEach((a) => a.remove());
  width = 30;
  height = 30;
});

const createBoxes = (amount) => {
  const elemsDiv = [];

  for (let i = 0; i < amount; i++) {
    const createDivEl = document.createElement("div");
    elemsDiv.push(createDivEl);
  }

  boxesEl.append(
    ...elemsDiv.map((a) => {
      a.style.width = `${width}px`;
      a.style.height = `${height}px`;
      a.style.backgroundColor = `${getRandomHexColor()}`;
      a.style.border = "2px solid black";
      width += 10;
      height += 10;
      return a;
    })
  );
};
boxesEl.style.display = "flex";
boxesEl.style.flexWrap = "wrap";
boxesEl.style.gap = "5px";
