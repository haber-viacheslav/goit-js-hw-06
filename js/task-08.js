const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
	const formData = {};
	evt.preventDefault();
	const {
		elements: { email, password },
	} = evt.currentTarget;
	// console.log(email.name);
	// console.log(password.name);

	if (email.value === '' || password.value === '') {
		return alert('All fields must be filled');
	}

	formData[email.name] = email.value;
	formData[password.name] = password.value;
	console.log(formData);

	evt.currentTarget.reset();
}
