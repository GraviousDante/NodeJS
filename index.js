const express = require("express");
const database = require("./src/database");
const bodyParser = require('body-parser');
const app = express();
const session = require("express-session");
const http = require('http');
const {connect} = require("mongoose");
const {listen} = require("express/lib/application");

const hostname = '127.0.0.1';
const port = 3000;

connect('mongodb://localhost/T2203E', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

listen(port, hostname, () => {
    console.log(`Server running...`);
});

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/user-list", (req,res) => {
    User.find({}).then(rs=>{
        res.render("/list",{
            item: rs
        });
    }).catch(err=>{
        res.send(err);
    });
})

app.get("/createUser", function (req,res){
    const  Student = require("./src/models/user");
    Student.find({}).then(rs=>{

        res.render("/createUser",{
            items: rs
        });

    }).catch(err=>{
        res.send(err);
    });
});