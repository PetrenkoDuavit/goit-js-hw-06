// const form = document.getElementById(".name-input");

// form.addEventListener("keyup", (handleSubmit) => {
//   if (event.code === "Enter") console.log("enter was presed");
// });

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login },
//   } = event.currentTarget;

//   if (login.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

myInput.addEventListener("input", newInput);

function newInput(e) {
  console.log(e.currentTarget);
  mySpan.textContent = e.currentTarget.value;

  if (e.currentTarget.value === "") {
    mySpan.textContent = "Anonymous";
  }
}

// Решено+++++++++++++++++++++++++++++++++++++
