const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsMarkup = ingredients.map((elem) => {
	const liItemEl = document.createElement('li');
	liItemEl.classList.add('item');
	liItemEl.textContent = elem;
	return liItemEl;
});

ingredientsListEl.append(...ingredientsMarkup);
