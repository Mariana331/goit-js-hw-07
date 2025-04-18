const form = document.querySelector(`.js-form`);

form.addEventListener(`submit`, event => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === `` || password === ``) {
    alert(`All form fields must be filled in`);
    return;
  }

  const data = {
    userEmail: email,
    userPassword: password,
  };
  console.log(data);
  form.reset();
});
