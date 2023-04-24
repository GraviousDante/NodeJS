const express = require("express");
const database = require("./src/database");
const bodyParser = require('body-parser');
const app = express();
const session = require("express-session");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

mongoose.connect('mongodb://localhost/T2203E', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

server.listen(port, hostname, () => {
    console.log(`Server running...`);
});

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));