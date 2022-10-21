//                                                 -1-

const magicBtn = document.querySelector('.js-magic-btn');
// console.dir(document);
// const navEl = document.querySelector('.site-nav');
// // console.log(navEl);
// const navlinkEl = navEl.querySelectorAll('.site-nav__link');
// console.log(navlinkEl);

// for (const link of navlinkEl) {
//   console.log(link.textContent);
// }

// magicBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('.site-nav');
//   console.log(navEl);
//   const navlinkEl = navEl.querySelectorAll('.site-nav__link');
//   console.log(navlinkEl);
// });
/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 * querySelector если нашёл возвращает объект, если нет null
 * querySelectorAll если нашёл возвращает массив объектов, если нет [] пустой массив
 */

/*
 * Document.querySelector* и Element.querySelector*
 */

//                                                 -2-

// const magicBtn = document.querySelector('.js-magic-btn');
// const imageEl = document.querySelector('.hero__image');
// const heroTitleEl = document.querySelector('.hero__title');

// magicBtn.addEventListener('click', () => {
//   console.log(imageEl.getAttribute('src'));
//   console.log(imageEl);
// //   console.log(imageEl.src);
// imageEl.src =
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

// heroTitleEl.textContent = 'Я новый котик)))';
// //   console.log(imageEl.alt);

// imageEl.alt = 'это новый котик';
//   imageEl.removeAttribute('src');
//   console.log(imageEl.hasAttribute('alt'));
// });

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты - используются для функционала
 */

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[1].dataset.action);

//                                                 -3-

/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

// const navEl = document.querySelector('.site-nav');
// console.log(navEl);
// navEl.classList.add('super-cool', 'added-class');
// navEl.classList.remove('super-cool');

// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('new-class');
//   navEl.classList.replace('added-class', 'new-added-class');
//   console.log(navEl.classList.contains('new-class'));
// });

// const hrefLink = '/portfolio';
// const navLinkEl = document.querySelector(`.site-nav__link[href="${hrefLink}"]`);
// console.log(navLinkEl);

// navLinkEl.classList.add('site-nav__link--current');

//                                                 -4-

/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

// const navEl = document.querySelector('.site-nav');
// console.log(navEl);

// const navItemEl = navEl.firstElementChild;
// console.log(navItemEl);
// const navItemsEl = navEl.children;
// console.log(navItemsEl);

// const firstNavItem = navItemsEl[0];
// console.log(firstNavItem);

// const secondNavItem = firstNavItem.nextElementSibling;
// console.log(secondNavItem);

// const thirdNavItem = navEl.lastElementChild;
// console.log(thirdNavItem);

//                                                 -5-

/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */

const titleEl = document.createElement('h1');
titleEl.classList.add('title-class');
titleEl.textContent = 'New Hero Title';
// console.log(titleEl);

// document.body.prepend(titleEl);
/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img');
imageEl.classList.add('hero-img');
imageEl.src =
	'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'New picture alpine-mountains-glacier';
imageEl.width = 350;
// console.log(imageEl.width);

// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
// console.log(navItemEl);

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.href = 'http://pomodoro.com';
navLinkEl.textContent = 'About Us';
// console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
navEl.insertBefore(navItemEl, navEl.firstElementChild); // вариант если нужно его вставить в начало
// navEl.insertBefore(navItemEl, navEl.children[1]); // второй вариант если нужно поставить его кудато в средину

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

heroEl.append(titleEl, imageEl);

//                                                 -6-

/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
	{ label: 'red', color: '#F44336' },
	{ label: 'green', color: '#4CAF50' },
	{ label: 'blue', color: '#2196F3' },
	{ label: 'grey', color: '#607D8B' },
	{ label: 'pink', color: '#E91E63' },
	{ label: 'indigo', color: '#3F51B5' },
];

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);

/*
 * Пишем функцию для создания разметки колорпикера
 */

const colorPic = document.querySelector('.js-color-picker');

const option = colorPickerOptions[0];

// const elements = colorPickerOptions.map(option => {
//   // const option = colorPickerOptions[i];
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// colorPic.append(...elements);
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];
//   // console.log(colorPickerOptions[i]);
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   elements.push(buttonEl);
// }
// console.log(elements);

// colorPic.append(...elements);

const makeColorPickerOptions = options => {
	return options.map(option => {
		const buttonEl = document.createElement('button');
		buttonEl.type = 'button';
		buttonEl.classList.add('color-picker__option');
		buttonEl.textContent = option.label;
		buttonEl.style.backgroundColor = option.color;

		return buttonEl;
	});
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPic.append(...elements);

//                                                 -7-

import products from './data/proucts.js';

console.log(products);

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

{
	/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__price>Цена: 1111 кредитов</p>
</article>
*/
}

/*
 * Пишем функцию для создания карточки продукта
 */

const makeProductCard = ({ name, description, price }) => {
	const productEl = document.createElement('article');
	productEl.classList.add('product');
	const nameEl = document.createElement('h2');
	nameEl.textContent = name;
	nameEl.classList.add('product__name');
	const descrEl = document.createElement('p');
	descrEl.textContent = description;
	descrEl.classList.add('product__descr');
	const priceEl = document.createElement('p');
	priceEl.textContent = `Price: ${price} credits`;
	priceEl.classList.add('product__price');
	productEl.append(nameEl, descrEl, priceEl);
	return productEl;
};

const productContainerEl = document.querySelector('.js-products');

console.log(makeProductCard(products[0]));

// const elements = products.map(makeProductCard);

console.log(elements);
productContainerEl.append(...elements);

//                                                 -8-

/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */
// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);

// titleEl.innerHTML = 'New Title';
// titleEl.innerHTML = '<button type="button"> New Title </button>'; // переписать на новое
// console.log(titleEl.innerHTML);
// titleEl.innerHTML = '';
// titleEl.innerHTML = `<a href=""> This is link)</a>`;
// titleEl.innerHTML = '<a href="">Это ссылка)</a>';
// titleEl.innerHTML = '';

/*
 * Вставка разметки с insertAdjacentHTML()
 */

titleEl.insertAdjacentHTML('afterbegin', `<a href=""> This is link</a>`);

//                                                   -9-

import transactions from './data/transactions.js';
import transactionHistory from './data/transactions.js';

// <tr>
// 	<td>ID транзакции</td>
// 	<td>Сумма</td>
// 	<td>Дата</td>
// 	<td>Кто</td>
// 	<td>Тип транзации</td>
// 	<td>Имя счёта</td>
// 	<td>Номер счёта</td>
// </tr>;

//   {
//     id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//     amount: '179.07',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Bogan - DuBuque',
//     name: 'Auto Loan Account 7313',
//     type: 'deposit',
//     account: '19808943',
//   },
const makeTransactionTableRowMarkup = ({
	id,
	amount,
	date,
	name,
	business,
	type,
	account,
}) => {
	return `
    			<tr>
					<td>${id}</td>
					<td>${amount}</td>
					<td>${date}</td>
					<td>${business}</td>
					<td>${type}</td>
					<td>${name}</td>
					<td>${account}</td>
				</tr>
    `;
};
// console.log(transactionHistory);
console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const makeTransactionTableRowsMarkup = transactionHistory
	.map(makeTransactionTableRowMarkup)
	.join('');
console.log(makeTransactionTableRowsMarkup);

const tableEL = document.querySelector('.js-transaction-table');
tableEL.insertAdjacentHTML('beforeend', makeTransactionTableRowsMarkup);

//                                                 -1-

/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event => {
	console.log(event);

	console.log('Добавление слушателя на целевую кнопку');
	targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
	console.log(event);

	console.log('Удаление слушателя с целевой кнопки');
	targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
	logMessage();
}

function logMessage() {
	console.log('Клик по целевой кнопке');
}

//                                               -2-

/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.currentTarget);

	// console.log(formData);

	formData.forEach((value, key) => {
		console.log(`Значение ${key}: ${value}`);
	});

	// const formElements = event.currentTarget.elements;
	// console.log(formElements.subscription.value);
	// const mail = formElements.email.value;
	// const password = formElements.password.value;
	// console.log("Это событие формы");
	// console.log(`Почта: ${mail}, пароль: ${password}`);
	// const formData = {
	// 	mail,
	// 	password,
	// };
	// console.log(formData);
}

//                                                 -3-

/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
	input: document.querySelector('.js-input'),
	nameLabel: document.querySelector('.js-button > span'),
	licenseCheckbox: document.querySelector('.js-license'),
	btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener("focus", onInputFocus); // Focus
// refs.input.addEventListener("blur", onInputBlur); // Blur
// refs.input.addEventListener("change", onInputChange); // Change для работы с чекбоксами и радиобаттонами, селектами.
// refs.input.addEventListener("input", onInputInput);

refs.input.addEventListener('input', onInputInput);
refs.licenseCheckbox.addEventListener('change', onLicenceChange);

function onInputFocus() {
	console.log('Input get focus');
}

function onInputBlur() {
	console.log('Input lose focus');
}

function onInputChange(event) {
	console.log(event.currentTarget.value);
}

function onInputInput(event) {
	// console.log(event.currentTarget.value);
	refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenceChange(event) {
	console.log(event.currentTarget.checked);
	refs.btn.disabled = !event.currentTarget.checked;
}

//                                                -4-
/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

// const refs = {
// 	output: document.querySelector(".js-output"),
// 	clearBtn: document.querySelector(".js-clear"),
// };

window.addEventListener('keypress', onKeyPress);

refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
	// console.log(event);
	// console.log("event.key: ", event.key);
	// console.log("event.code: ", event.code);

	refs.output.textContent += event.key;
}

function onClearOutput() {
	refs.output.textContent = '';
}

//                                              -5-

/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
	const box = event.currentTarget;
	box.classList.add('box--active');
}

function onMouseLeave(event) {
	const box = event.currentTarget;
	box.classList.remove('box--active');
}

function onMouseMove(event) {
	console.log(event);
}

//                                                -6-

/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

// const refs = {
// 	openModalBtn: document.querySelector('[data-action="open-modal"]'),
// 	closeModalBtn: document.querySelector('[data-action="close-modal"]'),
// 	backdrop: document.querySelector(".js-backdrop"),
// };

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);

function onOpenModal() {
	document.body.classList.add('show-modal');
	window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal() {
	document.body.classList.remove('show-modal');
	window.removeEventListener('keydown', onEscKeyPress);
}

function onBackDropClick(event) {
	// console.log("click on backdrop");
	// console.log(event.currentTarget);
	// console.log(event.target);
	if (event.currentTarget === event.target) {
		// console.log("Клик именно по BackDrop");
		onCloseModal();
	}
}

function onEscKeyPress(event) {
	const ESC_KEY_CODE = 'Escape';
	const isEcsKey = event.code === ESC_KEY_CODE;
	if (isEcsKey) {
		// console.log("Escape");

		onCloseModal();
	}
}

//-----------------------------------------------Фрилансер по жизни--------------------------------------

// const htmlEl = document.documentElement; // Получаем объект html
// const headEl = document.head; // Получаем объект head
// const bodyEl = document.body; // Получаем объект body

// // console.log(htmlEl);
// // console.log(headEl);
// // console.log(bodyEl);
// const firstChildNode = bodyEl.firstChild; // Получаем объект первый дочерний элемент body
// const lastChilsNode = bodyEl.lastChild; // Получаем объект последний дочерний элемент body

// // console.log(firstChildNode);
// // console.log(lastChilsNode);

// // Коллекция childNodes содержит список всех детей, включая текстовые узлы.
// const childNodes = bodyEl.childNodes;
// // console.log(childNodes);

// const bodyChildren = bodyEl.children;

// console.log(bodyChildren);

// Соседние и родительский узлы -------------------------------------------------------
// const prevSiblingNode = bodyEl.previousSibling;
// const nextSiblingNode = bodyEl.nextSibling;
// const parentNode = bodyEl.parentNode;

// console.log(prevSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// Соседние и родительский элементы ---------------------------------------------------

// const prevElement = bodyEl.previousElementSibling;
// const nextElement = bodyEl.nextElementSibling;
// const parentElement = bodyEl.parentElement;

// console.log(prevElement);
// console.log(nextElement);
// console.log(parentElement);

// // Первый и последний дочерние элементы------------------------------------------------
// const firstElChild = bodyEl.firstElementChild;
// const lastElChild = bodyEl.lastElementChild;

// console.log(firstElChild);
// console.log(lastElChild);

// Для проверки наличия дочерних узлов
// существует функция hasChildNodes() -------
// console.log(bodyEl.hasChildNodes());

// for (const node of childNodes) {
//   console.log(node);
// }

// childNodes.forEach(node => console.log(node));

// Поиск произвольного элемента
// elem.querySelectorAll(CSS)

// // Поиск по селектору класса -------
// const elemOne = document.querySelectorAll('.nav-menu');
// // console.log(elemOne);

// // Поиск по селектору тега -------
// const elemTwo = document.querySelectorAll('li');
// // console.log(elemTwo);

// // Поиск по смешанному селектору тега и класса ------
// const elemThree = document.querySelectorAll('li.nav-menu__item');
// // console.log(elemThree);

// // Поиск по тегу первого уровня вложенности -------
// const elemFour = document.querySelectorAll('.nav-menu>li');
// // console.log(elemFour);

// // Поиск по нескольким классам -------
// const elemFive = document.querySelectorAll('.nav-menu__link, .active');
// // console.log(elemFive);

// // Поиск по вложенным классам --------
// const elemSix = document.querySelectorAll('.nav-menu__link .active');
// // console.log(elemSix);

// // Поиск по #id ---------
// const elemSeven = document.querySelectorAll('#active-link');
// // console.log(elemSeven);
// // Поиск по атрибуту -------
// const elemEight = document.querySelectorAll('[data-item = "40"]');
// // console.log(elemEight);

// // console.log(elemTwo[1]);

// for (const el of elemTwo) {
//   console.log(el);
// }

// const listActiveItem = document.querySelector('.active');
// console.log(listActiveItem);

// Изменение документа

// Содержимое элемента innerHTML

// Получаем объект
// const textEl = document.querySelector('.nav-menu__item');
const heroTitle = document.querySelector('.hero__title');
// // Пролучаем содержимое объекта "как есть" вместе с HTML

// const titleText = heroTitle.innerHTML;
// console.log(titleText);

// heroTitle.innerHTML = `${titleText} <p class="hero__descr red" > Best food and drinks</p>`;

// const textElementContent = textEl.innerHTML;
// console.log(textElementContent);

// Перезаписываем содержимое
// const newText = (textEl.innerHTML = 'GoIT community');
// console.log(newText);

//  Полезная возможность безопасно перезаписать текст

// const titleTextContent = heroTitle.textContent;
// console.log(titleTextContent);

// heroTitle.textContent = `${titleTextContent} and drinks`;

// const divEl = document.querySelector('.js-elem');
// console.log(divEl);

// const listEl = document.querySelectorAll('.nav-menu');
// console.log(listEl);

// const itemEl = document.createElement('li');
// listEl.append(itemEl);
