const express = require('express'); //commonjs
const path = require('path')
require('dotenv').config();


const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// khai báo route

app.get('/sample', (req, res) => {
  res.render('sample.ejs');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, hostname, () =>{
  
})