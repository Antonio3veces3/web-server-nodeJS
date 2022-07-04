const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port  = process.env.PORT;

app.use(express.static('public'));

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',  (req, res)=> {
    res.render('home',{
        title: 'Road Trip Mexico',
        name: 'Antonio Ramirez'
    });
})
app.get('/generic', function (req, res) {
    res.render('generic',{
        title: 'Road Trip Mexico',
        name: 'Antonio Ramirez'
    });
})
app.get('/elements', function (req, res) {
    res.render('elements',{
        title: 'Road Trip Mexico',
        name: 'Antonio Ramirez'
    });
})
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Listen on`, port);
});