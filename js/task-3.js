const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

input.addEventListener('input', event => {
  output.textContent = input.value;
  if (input.value.trim() === ``) {
    return (output.textContent = `Anonymous`);
  } else {
    output.textContent = input.value.trim();
  }
});
