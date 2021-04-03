const categoryEl = document.querySelectorAll(".item");
console.log(categoryEl);
console.log(`В списке ${categoryEl.length} категории.`);

const itemEl = document.querySelector(".item");
const titleEl = itemEl.firstElementChild;
console.log(`Категория: ${titleEl.textContent}`);
console.log(`Количество элементов: ${itemEl.querySelectorAll("li").length}`);

const lastEl = itemEl.nextElementSibling;
console.log(`Категория: ${lastEl.firstElementChild.textContent}`);
console.log(`Количество элементов: ${lastEl.querySelectorAll("li").length}`);

const thirdEl = lastEl.nextElementSibling;
console.log(`Категория: ${thirdEl.firstElementChild.textContent}`);
console.log(`Количество элементов: ${thirdEl.querySelectorAll("li").length}`);
