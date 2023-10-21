const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

textSpan.style.fontSize = input.value + "px";

input.addEventListener("input", () => {
  textSpan.style.fontSize = input.value + "px";
});
