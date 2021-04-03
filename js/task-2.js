const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingLIst = document.querySelector(`#ingredients`);

const makeIngrItem = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    return itemEl;
  });
};
const elements = makeIngrItem(ingredients);

ingLIst.append(...elements);
