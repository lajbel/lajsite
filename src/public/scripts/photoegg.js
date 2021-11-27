// script for random things when my photo is clicked

const easteregg = document.getElementById("easteregg");

const funnyThings = [
	`<a href="https://replit.com/mark">oh hi</a>`,
	`Try with arcade in <a href="https://majorariatto.itch.io/shipped">Shipped</a>`,
	`Yeah i'm here`,
	`Sorry, but Minecraft Bedrock is better.`,
	`I'm a girl`,
	`I'm a boy`,
	`Only for Newgrounds`
];

easteregg.innerHTML = `<span class="big">“</span>` + funnyThings[Math.floor(Math.random() * funnyThings.length)] + `<span class="big">”</span>`;

function photoEgg() {
	if(!easteregg.classList.contains("show")) easteregg.classList.add("show");
	else easteregg.classList.remove("show");
};