function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgColor(e) {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("span.color").textContent = color;
}

const colorBtn = document.querySelector("button.change-color");

colorBtn.addEventListener("click", changeBgColor);
