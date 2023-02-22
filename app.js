const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/signup.html");
});

app.post("/", function(req,res){
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email
    console.log(firstName, lastName, email)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});