// script for random things when my photo is clicked

const easteregg = document.getElementById("easteregg");

const funnyThings = [
	`<a href="https://replit.com/mark">oh hi</a>`,
	`PVP in <a href="https://majorariatto.itch.io/shipped">Shipped</a>?`,
	`Yeah i'm here`,
	`Sorry, but Minecraft Bedrock is better.`,
	`I'm a girl`,
	`I'm a boy`,
	`Only for Newgrounds`,
	`I love u`,
	`Random easter egg for Insany`,
	`Maybe there is a steam key`,
	`Np`,
	`Spinetta good but Calamaro better`,
	`I can help u`,
	`Greetings to MA2 and ICR`,
	`Hello DDOS friend`,
	`Meet luu, meet me`,
	` . `,
	`Nico Nico Nii`,
	`Tofe`,
	`<a href="https://rickroll.com">Yep is the default link color</a>`,
	`Gummy`,
	`Na2`,
	`undefined`,
	`lajbel#1223`,
	`69 my fav number`,
	`I need more ideas for this text`,
	`Only for Kongregate`,
	`The Love and Juice Below, simple.`,
	`Mauro Z is my brother`,
	`Kaboom`,
	`keep clicking`,
	`I have not copied from minecraft`,
	`Zzz`,
	`Do my history homework`,
	`I'm bad guy`,
	`Duh`,
	`Random easter egg for Insany`,
	`Lisan Stupid`,
	`Ban me`,
	`69 my fav number`,
];

easteregg.innerHTML = `<span class="big">“</span>` + funnyThings[Math.floor(Math.random() * funnyThings.length)] + `<span class="big">”</span>`;

function photoEgg() {
	if (!easteregg.classList.contains("show")) easteregg.classList.add("show");
	else easteregg.classList.remove("show");
}
