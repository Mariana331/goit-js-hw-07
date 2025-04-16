const allCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, allCategories.length);

allCategories.forEach(item => {
  const totalLi = item.querySelectorAll(`ul li`);
  console.log(`Category:`, item.querySelector(`h2`).textContent);
  console.log(`Elements:`, totalLi.length);
});
