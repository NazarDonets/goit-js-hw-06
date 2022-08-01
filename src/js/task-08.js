const formEl = document.querySelector('.login-form');

const onClick = formEl.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = {};

	if (
		formEl.elements['email'].value === '' ||
		formEl.elements['password'].value === ''
	) {
		alert('Все поля должны быть заполнены!');
	} else {
		formData.email = formEl.elements['email'].value;
		formData.password = formEl.elements['password'].value;
		console.log(formData);
		formEl.reset();
	}
});
