const express = require('express')
const handlebars = require("express-handlebars")
const path = require('path')
const app = express();

var hbs = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')



app.use('/', (req, res, next) => {
    console.log('will run before / route');
    next();
});

app.get('/', function (req, res, next) {
    console.log('route / called');
    res.render("index", { layout: false });

});

app.get('/users', function (req, res) {
    res.render("welcome", { layout: false, user: 'Patrick' });
});
app.get('/admin', function (req, res) {
    res.render("welcome", { layout: false, admin: 'admin' });
});

app.get('/admin', function (req, res) {
    res.render("welcome", { layout: false });
});

app.listen(3000, () => {
    console.log('app is running');
});