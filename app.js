import db from "./db.js";

const slider = document.getElementById("rec-food-container");
const button = document.getElementById("searchBtn");
const item = document.getElementById("txtField");
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



button.addEventListener("click", () => searchItem(item));

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
        resultContainer.appendChild(resultLink);
        resultContainer.appendChild(document.createElement("br"));
        found = true;
      }
    }
    if (!found) {
      document.getElementById("resultContainer").innerHTML =
        "Could not find item!";
    }
  } else {
    document.getElementById("resultContainer").innerHTML =
      "The field is empty!";
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
=======
	if (i <= 2) {
		slider.scrollLeft += 300;
		console.log(i);
	} else {
		slider.scrollLeft -= 600;
		i = 0;
		console.log("reset");
	}

