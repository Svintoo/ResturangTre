const slider = document.getElementById("rec-food-container");
let i = 1;


setInterval(function () {
  slide(slider);

  i++;
}, 3000);

function slide(slider) {
  if (i <= 2) {
    slider.scrollLeft += 300;
    console.log(i);
  } else {
    slider.scrollLeft -= 600;
    i = 0;
    console.log("reset");
  }
}
