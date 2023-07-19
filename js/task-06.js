// const refs = {
//     inputValue: document.getElementById("validation-input"),
// }

// console.log(refs.inputValue);

// refs.inputValue.addEventListener("input", simOnInput);

// function simOnInput(event) {
//   const { value } = event.target;
//   console.log(value.length);
// }

// const refs = {
//   decr: document.querySelector("text['data-length']"),
// };
// console.log(refs.decr);
const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const input1 = e.currentTarget;
  console.log(input1);

  const inputLength = Number(input1.dataset.length);

  if (input1.value.length === inputLength) {
    input1.classList.remove("invalid");
    input1.classList.add("valid");
  } else {
    input1.classList.remove("valid");
    input1.classList.add("invalid");
  }
  //console.log(input1);
}
