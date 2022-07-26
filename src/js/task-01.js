const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((elem) => {
	console.log(`Category: ${elem.querySelector('h2').textContent}`);
	console.log(`Elements: ${elem.querySelectorAll('li').length}`);
});
