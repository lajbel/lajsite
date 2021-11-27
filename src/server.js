//the (laj)server
const express = require("express");
const sass = require("express-compile-sass");
const path = require("path");
const { readFileSync } = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//project json
const projectsData = readFileSync("src/projects.json");
const projects = JSON.parse(projectsData).data;

//routes
const redirects = [
	[":var(kofi|donate)", "https://ko-fi.com/L3L26XTGV"],
	["commisions", "http://ko-fi.com/lajbelms/commissions"],
	["about", "https://peerlist.io/lajbel"],
	["bwd", "https://lajbel.itch.io/bug-wanna-die"],
];

app.get("/", (req, res) => {
	res.render("home.ejs", { title: "Home" });
});

app.get("/portfolio", (req, res) => {
	res.render("portfolio.ejs", { title: "Portfolio", projects: projects });
});

app.get("/contact", (req, res) => {
	res.render("contact.ejs", { title: "Contact" });
});

for (let i = 0; i < redirects.length; i++) {
	app.get("/" + redirects[i][0], (req, res) => {
		res.redirect(redirects[i][1]);
	});
}

//set sass middleware and static
app.use(
	sass({
		root: path.join(__dirname, "public"),
		sourceMap: false,
		sourceComments: false,
		watchFiles: true,
		logToConsole: false,
	})
);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
	res.status(404).redirect("https://www.youtube.com/watch?v=x31tDT-4fQw");
});

//listen server
app.listen(3000, () => {
	console.log("(laj)server started!");
});
