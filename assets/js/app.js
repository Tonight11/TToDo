// let lang = document.querySelectorAll('.header__choose')
// let currentLocation = location.href;
// let menu = document.querySelectorAll('.menu__link');
// let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

// lang.forEach(c => {

// 	c.addEventListener('click', function () {
// 		lang.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')
// 	})

// })

// Для многостраничной страницы

// for (let i = 0; i < menuLength; i++) {
// 	if (menu[i].href === currentLocation) {
// 		menu[i].classList.add("active");
// 	}
// }
// let burger = document.querySelector('.menu__icon')
// let iconMenu = document.querySelector('.menu')

// if (burger) {
// 	burger.addEventListener('click', function(e) {
// 		document.body.classList.toggle('lock')
// 		burger.classList.toggle('active')
// 		iconMenu.classList.toggle('active')
// 	})
// }
// let catalogSection = document.querySelector(".section-catalog");

// let removeChildren = function(item) {
// 	while(item.firstChild) {
// 		item.removeChild(item.firstChild);
// 	}
// }

// let pushChild = function(item, children) {
// 	removeChildren(item)
// 	for (let i = 0; i < children.length; i++) {
// 		item.appendChild(children[i]);
// 	}
// }

// let catalogRow = catalogSection.querySelector('.pizza__row');
// let catalogItem = catalogSection.querySelectorAll('.pizza__column');
// let catalogNav = catalogSection.querySelector('.menu-catalog__nav');

// catalogNav.addEventListener('click', function(e) {
// 	let target = e.target;
// 	let catalogBtn = target.closest('.menu-catalog__item')

// 	if(catalogBtn === null || catalogBtn.classList.contains('.menu-catalog__item.active')) {
// 		return;
// 	}

// 	let btnValue = catalogBtn.getAttribute('data-filter')

// 	if(btnValue === 'all') {
// 		pushChild(catalogRow, catalogItem);
// 		return;
// 	}

// 	let filterValue = [];
// 	for (let i = 0; i < catalogItem.length; i++) {
// 		const curent = catalogItem[i];
// 		if(curent.getAttribute('data-category') == btnValue) {
// 			filterValue.push(curent);
// 		}
// 	}

// 	pushChild(catalogRow, filterValue)

// })
// let modalBtn = document.querySelectorAll('[data-modal]');
// let madalCLose = document.querySelectorAll('.popup__close');
// let madalArea = document.querySelectorAll('.popup');


// modalBtn.forEach(i => {
// 	i.addEventListener('click', e => {
// 		let current = e.currentTarget;
// 		let modalId = current.getAttribute('data-modal');
// 		let modal = document.getElementById(modalId);
// 		let modalContent = document.querySelector('.popup__content')

// 		modalContent.addEventListener('click', e => {
// 			e.stopPropagation()
// 		})

// 		modal.classList.add('open');
// 		document.body.classList.add('lock');
// 	})
// })

// madalCLose.forEach(i => {
// 	i.addEventListener('click', e => {
// 		let currentModal = e.currentTarget.closest('.popup');

// 		currentModal.classList.remove('open');
// 		document.body.classList.remove('lock');
// 	})
// })


// madalArea.forEach(i => {
// 	i.addEventListener('click', e => {
// 		let currentModal = e.currentTarget;

// 		currentModal.classList.remove('open');
// 		document.body.classList.remove('lock');
// 	})
// })
// let autoresize = document.querySelectorAll('[data-autoresize]');

// autoresize.forEach(i => {
// 	let autoresizeH = i.offsetHeight;

// 	i.addEventListener('input', e => {
// 		let current = e.target;

// 		current.style.height = autoresizeH + 'px';
// 		current.style.height = current.scrollHeight + 'px';
// 	})
// })
// function ibg(){

// 	let ibg=document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if(ibg[i].querySelector('img')){
// 			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// 		}
// 	}
// }

// ibg();
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

// new Swiper(".swiper-container", {
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	pagination: {		
// 		el: '.swiper-pagination',
		
// 		type: 'fraction',
// 		renderFraction: function (currentClass, totalClass){
// 			return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
// 		},


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true, 


		// scss: swiper-pagination-bullets
	// },



	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true
	// },


	// simulateTouch: false,
	// градус при котором поворот
	// touchAngle: 90,
	// grabCursor: true,


	// slideToClickedSlide: false,


	// hashNavigation: {
	// 	watchState: true,
	// },

	// keyboard: {
		// enabled: true,
		// onlyInViewport: true,
	// },

	// mousewheel: {
		// sensiitivity: 1,
	// },


	// autoHeight: true,

	// сколько элементов в 1ой странице свайпера
	// slidesPerView: 2,

	// watchOverflow: true,

	// spaceBetween: 30,
	
	// сколько элементов при прокрутке пропустит
	// slidesPerGroup: 2,

	// centeredSlides: false,
	
	// с какой начнет
	// initialSlide: 0,
	
	// колонка(нужна высота+вычесть spaceBetween)
	// slidesPerColumn: 2,

	// бесконечность
	// loop: true,
	// loopedSlides: 0,
	
	
	// freeMode: true,
	
	
	// autoplay: {
	// 	delay: 2000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false,
	// },
	
	// speed: 800,
	
	// direction: 'vertical',

	// effect: 'slide',

	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// effect: 'flip',
	// flipEffect: {
	// 	slideShadows: false,
	// 	limitRotation: true,
	// },

	// плохой режим
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// 	shadow: true,
	// 	shadowOffset: 0,
	// 	shadowScale: 0.5,
	// },

	// effect: 'coverflow',
	// flipEffect: {
	// 	slideShadows: false,
	// 	rotate: 10,
	// 	stretch: 50,
	// },

	// breakpoints: {
	// 	320: {
	// 	},
	// 	480: {
	// 	},
	// 	772: {
	// 	},
	// 	992: {
	// 	}, 
	// },

	// миниатюра
	// thumbs: {
	// 	swiper: {
	// 		el: '.mini-swiper',
	// 		slidesPerView: 4,
	// 	}
	// },


// 	preloadImages: false,
// 	lazy: {
// 		loadOnTransitionStart: false,
// 		loadPrevNext: false,
// 	},
// 	watchSlidesProgress: true,
// 	watchSlidesVisibility: true,
// 	nested: true,
// });


// Swiper in swiper
// new Swiper(".image-in", {
// 	pagination: {		
// 		el: '.swiper-pagination',
		
		// type: 'fraction',
		// renderFraction: function (currentClass, totalClass){
		// 	return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + ' <span class="' + totalClass + '"></span>';
		// },


		// scss: swiper-pagination-fraction


		// type: 'bullets',
		// clickable: true,
		// dynamicBullets: true,


		// scss: swiper-pagination-bullets
	// },
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	initialSlide: 0,
// 	nested: true,
// });
// localStorage.clear();


let todoInput = document.querySelector('.todo__input');
let todoBtn = document.querySelector('.todo__btn');
let todoList = document.querySelector('.todo__list');



todoBtn.addEventListener('click', function (e) {
	e.preventDefault();

	let inputValue = todoInput.value;

	if (!inputValue) {
		return false;
	}

	let todoContainer = document.createElement("li");
	todoContainer.classList.add("list__item")
	todoList.appendChild(todoContainer);


	let todoListText = document.createElement("div");
	todoListText.classList.add("list__text");
	todoListText.innerText = inputValue;
	todoContainer.appendChild(todoListText);

	saveLocalStorage(todoInput.value);




	let todoListComplete = document.createElement("button");
	let todoListIconComplete = document.createElement("i");

	todoListComplete.classList.add("list__btn-complete", "list__btn");
	todoListIconComplete.classList.add("list__complete", "fas", "fa-check");

	todoContainer.appendChild(todoListComplete);
	todoListComplete.appendChild(todoListIconComplete);


	let todoListDelete = document.createElement("button");
	let todoListIconDelete = document.createElement("i");

	todoListDelete.classList.add("list__btn-delete", "list__btn");
	todoListIconDelete.classList.add("list__delete", "fas", "fa-trash");

	todoContainer.appendChild(todoListDelete);
	todoListDelete.appendChild(todoListIconDelete);





	let text = todoListDelete.closest('li');
	let textHeight = text.offsetHeight;

	todoListDelete.style.height = textHeight + "px";
	todoListComplete.style.height = textHeight + "px";


	todoInput.value = ''
});


todoList.addEventListener('click', function (e) {
	const target = e.target;

	if (!target.classList.contains('list__btn-delete')) {
		return;
	}

	let targetParent = target.parentElement;
	targetParent.classList.add('delete');
	targetParent.addEventListener('transitionend', () => {
		targetParent.remove()
	})
	const todo = target.parentElement
	removeLocalStorage(todo)
	removeCompleted(todo)


})

todoList.addEventListener('click', function (e) {
	const target = e.target;

	if (!target.classList.contains('list__btn-complete')) {
		return;
	}

	let targetText = target.previousSibling;
	targetText.classList.add('complete');
	target.classList.add('green');

	let todo = target.parentElement
	let todoText = todo.firstChild.innerText

	saveCompleted(todoText)
})


function saveLocalStorage(todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalStorage(todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))
	}
	let todoIndex = todo.firstChild.innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}


document.addEventListener('DOMContentLoaded', function getLocalStorage() {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))
	}

	todos.forEach(function (todo) {
		let todoContainer = document.createElement("li");
		todoContainer.classList.add("list__item")
		todoList.appendChild(todoContainer);


		let todoListText = document.createElement("div");
		todoListText.classList.add("list__text");
		todoListText.innerText = todo;
		todoContainer.appendChild(todoListText);




		let todoListComplete = document.createElement("button");
		let todoListIconComplete = document.createElement("i");

		todoListComplete.classList.add("list__btn-complete", "list__btn");
		todoListIconComplete.classList.add("list__complete", "fas", "fa-check");

		todoContainer.appendChild(todoListComplete);
		todoListComplete.appendChild(todoListIconComplete);


		let todoListDelete = document.createElement("button");
		let todoListIconDelete = document.createElement("i");

		todoListDelete.classList.add("list__btn-delete", "list__btn");
		todoListIconDelete.classList.add("list__delete", "fas", "fa-trash");

		todoContainer.appendChild(todoListDelete);
		todoListDelete.appendChild(todoListIconDelete);





		let text = todoListDelete.closest('li');
		let textHeight = text.offsetHeight;

		todoListDelete.style.height = textHeight + "px";
		todoListComplete.style.height = textHeight + "px";
	});
})


function saveCompleted(complete) {
	let completed;
	if (localStorage.getItem('completed') === null) {
		completed = [];
	} else {
		completed = JSON.parse(localStorage.getItem('completed'))
	}

	if (completed.includes(complete)) {
		return;
	}
	completed.push(complete);
	localStorage.setItem('completed', JSON.stringify(completed));
}

function removeCompleted(complete) {
	let completed;
	if (localStorage.getItem('completed') === null) {
		completed = [];
	} else {
		completed = JSON.parse(localStorage.getItem('completed'))
	}
	let completeIndex = complete.firstChild.innerText;
	completed.splice(completed.indexOf(completeIndex), 1);
	localStorage.setItem('completed', JSON.stringify(completed));
}


document.addEventListener('DOMContentLoaded', function getComplete() {
	let completed;
	if (localStorage.getItem('completed') === null) {
		completed = [];
	} else {
		completed = JSON.parse(localStorage.getItem('completed'))
	}

	let textComplete = document.querySelectorAll('.list__text')

	completed.forEach(function (complete) {

		textComplete.forEach(function (e) {
			if (e.innerText == complete) {
				e.classList.add('complete');
				e.nextElementSibling.classList.add('green');
			}

		})

	})

})