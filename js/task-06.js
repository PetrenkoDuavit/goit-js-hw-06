const myInput = document.querySelector("#validation-input");

myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const input1 = e.currentTarget;

  const inputLength = Number(input1.dataset.length);

  function checkValidInput(value1, value2) {
    input1.classList.remove(value1);
    input1.classList.add(value2);
  }

  if (input1.value.length === inputLength) {
    checkValidInput("invalid", "valid");
  } else {
    checkValidInput("valid", "invalid");
  }
}

// const valInput = document.getElementById("validation-input");
// let countLength = 0;

// valInput.addEventListener("input", () => {
//   countLength = valInput.value.trim().length;
// });

// valInput.addEventListener("blur", () => {
//   if (countLength == valInput.dataset.length) {
//     valInput.classList.add("valid");
//     valInput.classList.remove("invalid");
//   } else {
//     valInput.classList.add("invalid");
//     valInput.classList.remove("valid");
//   }
// });
