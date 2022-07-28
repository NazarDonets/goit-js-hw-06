const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute('data-length'));
inputEl.classList.add('validation-input');

inputEl.addEventListener('blur', () => {
	if (inputEl.value.length !== inputLength) {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
		return;
	}

	if (inputEl.value.length === inputLength) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
		return;
	}
});
