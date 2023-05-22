require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database')

const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;


//simple query
connection.query(
    'SELECT * FROM `user` u',
    function (err, results,fields){
        console.log(">>>results",results);
    }
);

//config template engine
configViewEngine(app)

//khai báo routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {});
