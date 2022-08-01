function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainerEl = document.querySelector('#boxes');
const amountEl = document.querySelector('input[type=number]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

let edgeLength = 30;

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		const newBox = document.createElement('div');
		newBox.style.width = `${edgeLength}px`;
		newBox.style.height = `${edgeLength}px`;
		newBox.style.backgroundColor = getRandomHexColor();
		boxesContainerEl.append(newBox);
		edgeLength += 10;
	}
}

function destroyBoxes() {
	boxesContainerEl.innerHTML = '';
	edgeLength = 30;
}

createBtnEl.addEventListener('click', () => {
	createBoxes(amountEl.value);
});

destroyBtnEl.addEventListener('click', () => {
	destroyBoxes();
});
