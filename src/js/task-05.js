const inputEl = document.querySelector('#name-input');
const dynamicNameEl = document.querySelector('#name-output');
const defaultValue = dynamicNameEl.textContent;

inputEl.addEventListener('input', () => {
	if (inputEl.value === '') {
		dynamicNameEl.textContent = defaultValue;
	} else {
		dynamicNameEl.textContent = inputEl.value;
	}
});
