function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
	inputValue: document.querySelector('[type="number"]'),
	boxesField: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click', onDestroyBoxes);
refs.inputValue.addEventListener('change', onGetValue);

let inputNumber = 0;
function onGetValue(evt) {
	inputNumber = evt.target.value;
}
let widthValue = 30;
let heightValue = 30;
function onCreateBoxes(amount) {
	amount = inputNumber;
	const boxesArray = [];

	for (let i = 0; i < amount; i += 1) {
		const boxesMurkup = `<div style=" background-color: ${getRandomHexColor()}; width: ${widthValue}px; height: ${heightValue}px"></div>`;

		widthValue += 10;
		heightValue += 10;

		boxesArray.push(boxesMurkup);
	}

	refs.boxesField.insertAdjacentHTML('afterbegin', boxesArray.join(''));
}

function onDestroyBoxes() {
	refs.boxesField.innerHTML = '';
	widthValue = 30;
	heightValue = 30;
}
