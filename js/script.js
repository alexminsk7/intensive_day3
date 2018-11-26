"use strict";
window.addEventListener("DOMContentLoaded", function() {
	// получаем информацию для работы
	let products = document.querySelectorAll(".product"),
	buttons = document.getElementsByTagName("button"),
	shop = document.getElementsByClassName("shop")[0],
	open = document.getElementsByClassName("open")[0];

			// Отдельный цикл для кнопки "Закрыть/Close", чтобы не было ошибки с cloneNode
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].classList.add("buyButton");
			}
			
			buttons = document.querySelectorAll('.buyButton');

	// Функция для создания корзины
	function createCart() {
			// Создаем элементы для нашей корзины
			let cart = document.createElement("div"),
			field = document.createElement("div"),
			heading = document.createElement("h2"),
			close = document.createElement("button");
			
			// Стилизуем элементы с помощью классов
			cart.classList.add("cart");
			field.classList.add("cart-field");
			close.classList.add("close");
			
			// Добавляем текст к кнопке, заголовку
			close.textContent = "Закрыть";
			heading.textContent = "В нашей корзине:";
			
			// Добавление элементов на страницу
			document.body.appendChild(cart);
			cart.appendChild(heading);
			cart.appendChild(field);
			cart.appendChild(close);
		}
		createCart();

		let field = document.querySelector(".cart-field"),
		cart = document.querySelector(".cart"),
		close = document.querySelector(".close");

	// Создаем цикл для работы с кнопками
	for (let i = 0; i < buttons.length; i++) {
		
		// Вешаем обработчик событий на каждую кнопку
		buttons[i].addEventListener("click", function() {
			if (buttons[i].textContent == "Купить!") {
				buttons[i].textContent = "Убрать";
				field.appendChild(products[i]);
			} else {
				buttons[i].textContent = "Купить!";
				shop.appendChild(products[i]);
			}
		});
	}

	// Создаем функцию для открытия и закрытия корзины
	function openCart() {
		cart.style.display = "block"
	};
	function closeCart() {
		cart.style.display = "none"
	};

	// Вешаем обработчики на кнопки открыть/закрыть
	open.addEventListener("click", openCart);
	close.addEventListener("click", closeCart);

});