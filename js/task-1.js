const categoryEl = document.querySelectorAll(`ul#categories li.item`);
console.log(categoryEl);
console.log(`В списке ${categoryEl.length} категории.`);

categoryEl.forEach((element) => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastChild.previousSibling.childElementCount}`
  );
});
