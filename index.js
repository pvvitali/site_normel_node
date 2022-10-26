const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;

const database = require('./db_pool');

app.set('view engine', 'ejs');

app.use('/static/css', express.static('static/css'));
app.use('/static/js', express.static('static/js'));
app.use('/static/img', express.static('static/img'));
app.use('/monitoring', express.static('monitoring'));

// npm install body-parser
//const bodyParser = require('body-parser);
//app.use(bodyParser.json());       //for json
//app.use(bodyParser.urlencoded( { extended: true } ));      //for form
// request.body.title -> get field title

//variant2 
// app.use(express.json());
// request.body -> object json

app.use(express.json());

app.get('/', (request, response) => {
    response.render('base', {});
    database.selectLastRow();
});

app.get('/monitoring', (req, res) => {
    res.render('monitor', {});

    //res.status(200).json("Page monitoring");
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.user);
    console.log(req.body["user"]);
    res.status(200).json("It works!");
});


app.listen(port, () => {
    console.log(`Server listening on: http://normel.online:${port}`);
});





// const http = require('http');
// const port = 8080;

// const server = http.createServer( (req, res) => {
//     res.end("Hello Vitali nodejs server");
// });

// server.listen(port, () => {
//     console.log(`Server listening on: localhost:${port} ...`);
// });