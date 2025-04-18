const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

input.addEventListener('input', event => {
  const userValue = input.value.trim();
  if (userValue === ``) {
    return (output.textContent = `Anonymous`);
  } else {
    output.textContent = userValue;
  }
});
