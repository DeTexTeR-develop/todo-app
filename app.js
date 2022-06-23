const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/todo', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log("Listening at port 3000!");
} )