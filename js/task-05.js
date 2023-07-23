// }

const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

myInput.addEventListener("input", newInput);

function newInput(e) {
  mySpan.textContent = e.currentTarget.value.trim();
  // console.log(e);

  if (mySpan.textContent === "") {
    mySpan.textContent = "Anonymous";
  }
}
