const slider = document.getElementById("rec-food-container");
let i = 1;
const nav = document.querySelector(".header-nav");
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const hiddenLinks = document.querySelector(".hidden-links");

openBtn.addEventListener("click", () => {
	nav.style.right = "0";
	hiddenLinks.style.opacity = 1; // Show links when menu opens
	closeBtn.classList.remove("hidden-close-btn");
});

closeBtn.addEventListener("click", () => {
	nav.style.right = "-100%";
	hiddenLinks.style.opacity = 0; // Hide links when menu closes
	closeBtn.classList.add("hidden-close-btn");
});

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
