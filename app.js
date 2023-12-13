import db from "./db.js";

const slider = document.getElementById("rec-food-container");
const button = document.getElementById("searchBtn");
const item = document.getElementById("txtField");
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

function slide(slider) {
  if (i <= 2) {
    slider.scrollLeft += 300;
  } else {
    slider.scrollLeft -= 600;
    i = 0;
  }
}

button.addEventListener("click", () => searchItem(item));

function searchItem(item) {
  if (item.value !== "") {
    document.getElementById("result").innerHTML = "";
    for (let p = 0; p < allItems.length; p++) {
      if (allItems[p].id.includes(item.value) == true) {
        let result = allItems[p].dsc;
        document.getElementById("result").innerHTML += result;
        document.getElementById("result").innerHTML += "<br>";
      }
    }
  } else {
    document.getElementById("result").innerHTML = "The field is empty!";
  }
}
