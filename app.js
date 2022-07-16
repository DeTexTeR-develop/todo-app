const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const todos = require('./model/todo');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/to-do')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connected");
});

app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/todo', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log("Listening at port 3000!");
} )