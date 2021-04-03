const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingLIst = document.querySelector("#ingredients");
const markup = ingredients.reduce((acc, el) => `<li>${el}</li>`);
ingLIst.insertAdjacentHTML("beforeend", markup);
