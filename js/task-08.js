function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled!");
    return;
  }

  console.log({
    email: email,
    password: password,
  });

  form.reset();
}

document
  .querySelector("form.login-form")
  .addEventListener("submit", submitForm);
