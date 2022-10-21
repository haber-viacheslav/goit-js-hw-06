const refs = {
	listMainRef: document.querySelector('#categories'),
	listsInnerRef: document.querySelectorAll('.item'),
};

const resultRefs = {
	listMainLength: refs.listMainRef.children.length,
	listInnerFirstTitle: refs.listsInnerRef[0].firstElementChild.textContent,
	listInnerSecondTitle: refs.listsInnerRef[1].firstElementChild.textContent,
	listInnerThirdTitle: refs.listsInnerRef[2].firstElementChild.textContent,
	listInnerFirstLength:
		refs.listsInnerRef[0].lastElementChild.children.length,
	listInnerSecondLength:
		refs.listsInnerRef[1].lastElementChild.children.length,
	listInnerThirdLength:
		refs.listsInnerRef[2].lastElementChild.children.length,
};

const clMessage = `Number of categories: ${resultRefs.listMainLength}

Category: ${resultRefs.listInnerFirstTitle}
Elements: ${resultRefs.listInnerFirstLength}

Category: ${resultRefs.listInnerSecondTitle}
Elements: ${resultRefs.listInnerSecondLength}

Category: ${resultRefs.listInnerThirdTitle}
Elements: ${resultRefs.listInnerThirdLength}
`;

console.log(clMessage);
