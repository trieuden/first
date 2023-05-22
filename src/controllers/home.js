const connection = require('../config/database');

const getHomePage = (req,res)=>{
    let user = [];
    connection.query(
        'SELECT * FROM `user` u',
        function (err, results,fields){
            user=results;
            console.log(">>>results",results);
            res.send(JSON.stringify(user));
        }
    );
}

const getABC = (req,res)=>{
    res.send("Hello World!");
}

module.exports = {
    getHomePage,
    getABC
}