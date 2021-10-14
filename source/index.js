const express = require("express");
const path = require("path");

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render(path.join(__dirname, "/site/home.html"));
});

app.get('/portfolio', (req, res) => {
    res.render(path.join(__dirname, "/site/portfolio.html"));
});

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, "/site/contact.html"));
});

app.use(express.static(__dirname));

app.use((req, res) => {
    res.status(404).send("sad");
});

app.listen(3000, () => {
    console.log("LaJServ started!");
});