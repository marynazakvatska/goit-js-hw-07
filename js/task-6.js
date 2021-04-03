//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

//Для добавления стилей, используй CSS - классы valid и invalid.

const checkInput = document.querySelector("#validation-input");
console.log(checkInput);
checkInput.addEventListener("blur", onInput);
function onInput(event) {
  checkInput.classList.add("valid", "invalid");
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === 6) {
    checkInput.classList.toggle("invalid");
  }
}
