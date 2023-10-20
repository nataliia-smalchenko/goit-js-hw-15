const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (ev) => {
  const value = ev.currentTarget.value;
  if (value.length < 6) {
    ev.currentTarget.classList.add("invalid");
  } else {
    ev.currentTarget.classList.add("valid");
  }
});

input.addEventListener("focus", (ev) => {
  ev.currentTarget.classList.remove("valid");
  ev.currentTarget.classList.remove("invalid");
});
