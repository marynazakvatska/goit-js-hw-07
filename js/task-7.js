const controlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
//textEl.classList.add(".text-decoration");

controlEl.addEventListener("input", onChange);

function onChange(event) {
  console.log(event.currentTarget.value);

  textEl.style.fontSize = event.currentTarget.value + "px";
}
