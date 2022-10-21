const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const listEl = document.querySelector('#ingredients');
const elements = ingredients.map(item => {
	const listItem = document.createElement('li');
	listItem.textContent = item;
	listItem.classList.add('item');
	return listItem;
});
listEl.append(...elements);
console.log(listEl);
