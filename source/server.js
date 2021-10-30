const express = require('express');
const path = require('path');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

// Routes

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/site/home.html'), {title: 'Home'});
});

app.get('/portfolio', (req, res) => {
    res.render(path.join(__dirname, '/site/portfolio.html'), {title: 'Portfolio'});
});

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, '/site/contact.html'), {title: 'Contact'});
});

app.get('/:var(kofi|donate)', (req, res) => {
    res.redirect('https://ko-fi.com/lajbel');
});

// User

app.use(express.static(__dirname));

app.use((req, res) => {
    res.status(404).send('sad');
});

app.listen(3000, () => {
    console.log('LaJServ started!');
});
