function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let color;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    color = getRandomHexColor();
    boxes.push(
      `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`
    );
    size += 10;
  }
  document.querySelector("div#boxes").innerHTML = boxes.join("");
}

function destroyBoxes() {
  document.querySelector("div#boxes").innerHTML = "";
}

document.querySelector("button[data-create]").addEventListener("click", () => {
  createBoxes(Number(document.querySelector("input").value));
});

document.querySelector("button[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
