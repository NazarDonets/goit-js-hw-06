function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const pageBodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
	pageBodyEl.style.backgroundColor = getRandomHexColor();
	colorValueEl.textContent = pageBodyEl.style.backgroundColor;
});
