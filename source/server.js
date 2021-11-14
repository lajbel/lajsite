//the lajserv
const express = require("express");
const sass = require("express-compile-sass");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

//routes
const redirects = [
	[":var(kofi|donate)", "https://ko-fi.com/L3L26XTGV"],
	["commisions", "http://ko-fi.com/lajbelms/commissions"],
	["bwd", "https://lajbel.itch.io/bug-wanna-die"],
];

app.get("/", (req, res) => {
	res.render(path.join(__dirname, "/site/home.ejs"), {title: "Home"});
});

app.get("/portfolio", (req, res) => {
	res.render(path.join(__dirname, "/site/portfolio.ejs"), {title: "Portfolio"});
});

app.get("/contact", (req, res) => {
	res.render(path.join(__dirname, "/site/contact.ejs"), {title: "Contact"});
});

for (let i = 0; i < redirects.length; i++) {
	app.get("/" + redirects[i][0], (req, res) => {
		res.redirect(redirects[i][1]);
	});
}

//set sass middleware and static
app.use(
	sass({
		root: __dirname,
		sourceMap: false,
		sourceComments: false,
		watchFiles: true,
		logToConsole: false,
	})
);

app.use(express.static(__dirname));

app.use((req, res) => {
	res.status(404).send("sad");
});

//listen server
app.listen(3000, () => {
	console.log("LaJServ started!");
});
