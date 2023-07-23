const listOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${listOfCategories.length} `);

listOfCategories.forEach(function (number) {
  console.log(`Category: ${number.firstElementChild.textContent}`);
  console.log(`Elements: ${number.lastElementChild.children.length}`);
});
