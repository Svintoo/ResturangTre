import db from "./db.js";

const slider = document.getElementById("rec-food-container");
const button = document.getElementById("searchBtn");
const item = document.getElementById("txtField");

let currentTableNumber = null;
const chooseTableBtn = document.getElementById("choose-table-btn");
const tableNumberMessage = document.getElementById("table-number-message");

chooseTableBtn.addEventListener("click", function () {
	const tableNumberInput = document.getElementById("table-number");
	const enteredTableNumber = tableNumberInput.value;

	if (enteredTableNumber !== "") {
		currentTableNumber = enteredTableNumber;

		updateShoppingCartMessage();

		tableNumberMessage.textContent = `Ditt bordsnummer är ${currentTableNumber}`;
		tableNumberMessage.style.display = "block";
	} else {
		tableNumberMessage.style.display = "none";
	}
});

function updateShoppingCartMessage() {
	const shoppingCartMessage = document.getElementById("shopping-cart-message");
	shoppingCartMessage.textContent = `Bord: ${currentTableNumber}`;
}


const nav = document.querySelector(".header-nav");

const allItems = [
	...db.bbqs,
	...db["best-foods"],
	...db.breads,
	...db.burgers,
	...db.chocolates,
	...db.desserts,
	...db.drinks,
	...db["fried-chicken"],
	...db["ice-cream"],
	...db.pizzas,
	...db.porks,
	...db.sandwiches,
	...db.sausages,
	...db.steaks,
	...db["our-foods"],
];
let i = 1;

let itemDesc = null;
let toggleSearch = false;
let toggleResult = false;


setInterval(function () {
	slide(slider);
	slide(slider);

	i++;
}, 3000);


button.addEventListener("click", () => searchItem(item));

button.addEventListener("click", () => {
	searchItem(item);
});


function searchItem(item) {
	if (item.value !== "") {
		let found = false;
		document.getElementById("resultContainer").innerHTML = "";
		for (let p = 0; p < allItems.length; p++) {
			if (allItems[p].id.includes(item.value) == true) {
				let result = allItems[p].dsc;
				const resultLink = document.createElement("a");
				resultLink.href = "#";
				resultLink.className = "result";
				resultLink.textContent = result;
				resultLink.style.textDecoration = "none";
				resultLink.style.color = "white";

				resultLink.addEventListener("click", () =>
					itemDescription(allItems[p])
				);

				resultLink.addEventListener("click", () => {
					itemDescription(allItems[p]);
					toggleResultContainer();
				});

				resultContainer.appendChild(resultLink);
				resultContainer.appendChild(document.createElement("br"));
				found = true;
			}
		}
		if (!found) {
			document.getElementById("resultContainer").innerHTML =
				"Could not find item!";

			console.error("could not find item");

		}
	} else {
		document.getElementById("resultContainer").innerHTML =
			"The field is empty!";

		console.error("empty field");

	}
}

function itemDescription(item) {
	console.log(item.dsc + " Clicked!");

	let itemDesc = document.createElement("div");
	itemDesc.className = "productInfo";
	itemDesc.style.height = "300px";
	itemDesc.style.width = "300px";
	console.log(item.img);
	itemDesc.style.backgroundImage = `url(${item.img})`;
	itemDesc.style.backgroundSize = "cover";

	document.body.appendChild(itemDesc);

	let itemDescHeader = document.createElement("header");
	itemDescHeader.className = "productInfoHeader";
	itemDescHeader.innerHTML = item.dsc;
	itemDesc.appendChild(itemDescHeader);

	productScreen.appendChild(itemDesc);

	let itemDescH2 = document.createElement("h2");
	itemDescH2.className = "productDescH2";
	itemDescH2.innerHTML = item.dsc;
	itemDesc.appendChild(itemDescH2);


	let itemDescPrice = document.createElement("p");
	itemDescPrice.className = "productInfoPrice";
	itemDescPrice.innerHTML = item.price;
	itemDescPrice.innerHTML += ":-SEK";
	itemDesc.appendChild(itemDescPrice);

}

function slide(slider) {
	if (i <= 2) {
		slider.scrollLeft += 300;
	} else {
		slider.scrollLeft -= 600;
		i = 0;
	}



	let itemAddToCart = document.createElement("button");
	itemAddToCart.innerHTML = "Add to cart";
	itemAddToCart.id = "addToCart";
	itemAddToCart.addEventListener("click", () => {
		alert("pressed!");
	});
	itemDesc.appendChild(itemAddToCart);
}

function slide(slider) {

	if (i <= 2) {
		slider.scrollLeft += 300;
	} else {
		slider.scrollLeft -= 600;
		i = 0;
	}
}
function toggleResultContainer() {
	let resultContainer = document.getElementById("resultContainer");
	if (toggleSearch == false) {
		resultContainer.classList.remove("visually-hidden");
		toggleSearch = true;
	} else {
		resultContainer.classList.add("visually-hidden");
		toggleSearch = false;
	}
}
function removeProductDesc() {
	console.log("field clicked!");
	let itemDesc = document.getElementById("productId");
	let removeField = document.getElementById("clickRemove");
	let productScreen = document.getElementById("image-grid");

	productScreen.removeChild(itemDesc);
	productScreen.removeChild(removeField);

	console.log(toggleResult);
}
