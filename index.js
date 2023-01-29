const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/blog", (req, res) => {
    res.redirect('/');
});

app.use("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(8080);