const onInputs = document.querySelector("#name-input");
const onLabel = document.querySelector("#name-output");

onInputs.addEventListener("input", onInput);
const span = onLabel.textContent;
function onInput(event) {
  console.log(event.currentTarget.value);
  onLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    onLabel.textContent = span;
  }
}
console.log(onLabel.textContent);
