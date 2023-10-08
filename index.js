var express = require("express");
var axios = require('axios');

// Constants
const PORT = 8080;
const VAR = process.env.EXTRA;
const FLAG = process.env.FLAG;
const UTILIZADOR = process.env.UTILIZADOR;

var app = express();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Config glad is set to ${FLAG}`)
    console.log(`Username used ${UTILIZADOR}`)
});

app.get("/url", (req, res, next) => {
    //res.json([`${VAR}`, "Tony", "Lisa", "Michael", "Ginger", "Food"]);

    //let query = req.query.queryStr;
    //let url = `https://your.service.org?query=${query}`;

    let url = `https://jsonplaceholder.typicode.com/todos/1`

    axios({
            method: 'get',
            url //,
            //auth: {
            //    username: 'the_username',
            //    password: 'the_password'
            //}
        })
        .then(function(response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log(error);
        });

});