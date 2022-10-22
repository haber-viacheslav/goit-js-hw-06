const refs = {
	controlRef: document.querySelector('#font-size-control'),
	textDifSizeRef: document.querySelector('#text'),
};

refs.controlRef.addEventListener('input', onSizeChanger);

function onSizeChanger() {
	refs.textDifSizeRef.style.fontSize = `${refs.controlRef.value}px`;
}
