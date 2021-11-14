const express = require('express');
const sass = require('express-compile-sass');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

// Routes

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/site/home.ejs'), {title: 'Home'});
});

app.get('/portfolio', (req, res) => {
    res.render(path.join(__dirname, '/site/portfolio.ejs'), {title: 'Portfolio'});
});

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, '/site/contact.ejs'), {title: 'Contact'});
});

app.get('/:var(kofi|donate)', (req, res) => {
    res.redirect('https://ko-fi.com/L3L26XTGV');
});

app.get('/bwd', (req, res) => {
    res.redirect('https://lajbel.itch.io/bug-wanna-die');
});


// Uses

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
    res.status(404).send('sad');
});

app.listen(3000, () => {
    console.log('LaJServ started!');
});
