import db from "./db.js";

const slider = document.getElementById("rec-food-container");
const button = document.getElementById("searchBtn");
const item = document.getElementById("txtField");
let i = 1;

setInterval(function () {
  slide(slider);

  i++;
}, 3000);

function slide(slider) {
  if (i <= 2) {
    slider.scrollLeft += 300;
    //console.log(i);
  } else {
    slider.scrollLeft -= 600;
    i = 0;
    //console.log("reset");
  }
}

button.addEventListener("click", () => searchItem(item));
//console.log(db.bbqs[0]);

function searchItem(item) {
  if (item.value !== "") {
    document.getElementById("result").innerHTML = "";
    //console.log(item.value);
    for (let p = 0; p < db.bbqs.length; p++) {
      if (db.bbqs[p].id.includes(item.value) == true) {
        let result = db.bbqs[p].id;
        let resultPretty = removeHyphen(result);
        document.getElementById("result").innerHTML += resultPretty;
        document.getElementById("result").innerHTML += "<br>";
      }
    }
  } else {
    document.getElementById("result").innerHTML = "The field is empty!";
  }
}

function removeHyphen(word) {
  let newWord = "";
  newWord += word[0].toUpperCase();

  for (let p = 1; p < word.length; p++) {
    if (word[p] == "-") {
      newWord += " ";
    } else {
      newWord += word[p];
    }
  }
  return newWord;
}
