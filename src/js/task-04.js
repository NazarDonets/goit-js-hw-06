const counterEl = document.querySelector('#counter');

const buttonDecrementEl = document.querySelector(
	'button[data-action="decrement"]'
);

const buttonIncrementEl = document.querySelector(
	'button[data-action="increment"]'
);

let counterValueEl = document.querySelector('#value');

let counter = 0;

counterEl.addEventListener('click', (e) => {
	if (e.target === buttonDecrementEl) {
		counter -= 1;
		counterValueEl.textContent = counter;
		return;
	}
	if (e.target === buttonIncrementEl) {
		counter += 1;
		counterValueEl.textContent = counter;
		return;
	}
});
