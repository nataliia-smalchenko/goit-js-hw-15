const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (ev) => {
  const value = ev.currentTarget.value;
  if (value.length === Number(ev.currentTarget.dataset.length)) {
    ev.currentTarget.classList.add("valid");
  } else {
    ev.currentTarget.classList.add("invalid");
  }
});

input.addEventListener("focus", (ev) => {
  ev.currentTarget.classList.remove("valid");
  ev.currentTarget.classList.remove("invalid");
});
