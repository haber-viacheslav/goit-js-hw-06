const refs = {
	valueRef: document.querySelector('#value'),
	decrementBtnRef: document.querySelector('[data-action="decrement"]'),
	incrementBtnRef: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtnRef.addEventListener('click', onDecrement);

refs.incrementBtnRef.addEventListener('click', onIncrement);

let counterValue = 0;

function onDecrement() {
	counterValue -= 1;
	refs.valueRef.textContent = counterValue;
}

function onIncrement() {
	counterValue += 1;
	refs.valueRef.textContent = counterValue;
}
