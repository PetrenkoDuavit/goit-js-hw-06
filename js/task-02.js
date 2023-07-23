const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");
ulEl.textContent = "ingredients";

for (let ingredient of ingredients) {
  // for (const i = 0; i < 3; i++) {
  const liEl = document.createElement("li");
  console.log(ingredient);
  liEl.textContent = ingredient;
  ulEl.appendChild(liEl);
}
document.body.appendChild(ulEl);
