// }

const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

myInput.addEventListener("input", newInput);

function newInput(e) {
  mySpan.textContent = e.currentTarget.value;

  if (e.currentTarget.value === "") {
    // Требует дороботки Нужно вызвать элемени "Рівно value". Есть баг реагирует на пробел
    mySpan.textContent = "Anonymous";
  }
}
