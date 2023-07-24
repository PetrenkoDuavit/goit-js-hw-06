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
