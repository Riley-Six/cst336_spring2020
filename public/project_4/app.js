const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));



app.get("/", function(req, res) {
    res.render('index.html');
});
app.get("/why", function(req, res) {
    res.render('why.html');
});
app.get("/how", function(req, res) {
    res.render('how.html');
});
app.get("/where", function(req, res) {
    res.render('where.html');
});



app.listen("8080", "127.0.0.1", function() {
    console.log("express server is Running...");
});

