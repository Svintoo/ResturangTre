import db from "./db.js";

// En array för att lägga in objekt i varukorgen
let shoppingCart = [];

const slider = document.getElementById("rec-food-container");
const button = document.getElementById("searchBtn");
const item = document.getElementById("txtField");
let itemDesc = null;
let toggleSearch = false;

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

setInterval(function () {
  slide(slider);
  i++;
}, 3000);

button.addEventListener("click", () => {
  searchItem(item);
  console.log("bttn clicked!"); // DELETE
});

function searchItem(item) {
  toggleResultContainer();
  if (item.value !== "") {
    let found = false;
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";

    for (let p = 0; p < allItems.length; p++) {
      if (allItems[p].id.includes(item.value) == true) {
        let result = allItems[p].dsc;
        const resultLink = document.createElement("a");
        resultLink.href = "#";
        resultLink.className = "result";
        resultLink.textContent = result;
        resultLink.style.textDecoration = "none";
        resultLink.style.color = "white";

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
  let productScreen = document.getElementById("image-grid");

  let clickField = document.createElement("div");
  clickField.id = "clickRemove";
  clickField.addEventListener("click", () => {
    removeProductDesc();
  });
  productScreen.appendChild(clickField);

  let itemDesc = document.createElement("div");
  itemDesc.className = "productInfo";
  itemDesc.id = "productId";
  itemDesc.style.height = "600px";
  itemDesc.style.width = "600px";
  console.log(item.img);
  itemDesc.style.backgroundImage = `url(${item.img})`;
  itemDesc.style.backgroundSize = "cover";
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
  // Add to cart button
  let itemAddToCart = document.createElement("button");
  itemAddToCart.innerHTML = "Add to cart";
  itemAddToCart.className = "button";
  itemAddToCart.id = "addToCart";
  itemAddToCart.addEventListener("click", () => {
// Adds item to cart
	addToCart(item);
  });
  itemDesc.appendChild(itemAddToCart);
}

// cart
function addToCart(item) {
	let found = false;
	for (let i = 0; i < shoppingCart.length; i++) {
		if (item.id === shoppingCart[i].id) {
			shoppingCart[i].antal += 1;
			found = true;
			break;
		}
	}
	if (found === false) {
		let shoppingCartItem = {id: item.id, antal: 1};
		shoppingCart.push(shoppingCartItem);
	}

	console.log(shoppingCart);
}

function toggleCart() {
	let cartContainer = document.getElementById("cart-container");
	if (cartContainer.style.display === "none") {
		cartContainer.style.display = "flex";
	}
	else {
		cartContainer.style.display = "none";
	}
	console.log("Nu kör vi!");
}

let toggleCartIcon = document.getElementById("cart-icon");
toggleCartIcon.addEventListener("click", () => { toggleCart() });

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
  if (itemDesc && removeField && productScreen) {
    productScreen.removeChild(itemDesc);
    productScreen.removeChild(removeField);
  } else {
    console.error("one or more elements not found");
  }
}

// Alla variabler relaterat till shopping-cart
let orderButton = document.getElementById("order-btn");

// All funktionalitet för shopping-cart
orderButton.addEventListener("click", sendOrder);

function sendOrder() {
	alert("Sending order!");
}


