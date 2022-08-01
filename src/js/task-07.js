const sliderEl = document.querySelector('#font-size-control');
const changeableTextEl = document.querySelector('#text');

function changeTextSize() {
	changeableTextEl.style.fontSize = `${sliderEl.value}px`;
}

changeTextSize();

sliderEl.addEventListener('input', changeTextSize);
