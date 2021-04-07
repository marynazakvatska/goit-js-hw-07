const allItems = document.querySelectorAll(".item");
console.log(`В списке ${allItems.length} категории.`);
const listItem = document.querySelector(".item");
// console.log(allItems[0].lastElementChild.children.length)
console.log("Категория:", allItems[0].firstElementChild.textContent);
console.log(
  `Количество элементов: ${allItems[0].lastElementChild.children.length}`
);
console.log("Категория:", allItems[1].firstElementChild.textContent);
console.log(
  `Количество элементов: ${allItems[1].lastElementChild.children.length}`
);
console.log("Категория:", allItems[2].firstElementChild.textContent);
console.log(
  `Количество элементов: ${allItems[2].lastElementChild.children.length}`
);
