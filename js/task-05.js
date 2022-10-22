const refs = {
	inputRef: document.querySelector('#name-input'),
	outputLabelRef: document.querySelector('#name-output'),
};
refs.inputRef.addEventListener('input', onInputChangeOutput);

function onInputChangeOutput(event) {
	!event.currentTarget.value
		? (refs.outputLabelRef.textContent = 'Anonymous')
		: (refs.outputLabelRef.textContent = event.currentTarget.value);
}

// function onInputChangeOutput(event) {
// 	if (!event.currentTarget.value) {
// 		refs.outputLabelRef.textContent = 'Anonymous';
// 	} else {
// 		refs.outputLabelRef.textContent = event.currentTarget.value;
// 	}
// }
