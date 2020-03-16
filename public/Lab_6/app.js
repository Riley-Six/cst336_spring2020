const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
// <a href="/">Home</a> <br>
// <a href="/mercury">Mercury</a> <br>
// <a href="/venus">Venus</a> <br>
// <a href="/earth">Earth</a> <br>
// <a href="/mars">Mars</a> <br>
// <a href="/jupiter">Jupiter</a> <br>
// <a href="/saturn">Saturn</a> <br>
// <a href="/uranus">Uranus</a> <br>
// <a href="/neptune">Neptune</a> <br>
// <a href="/pluto">Pluto</a> <br>

app.get("/", function(req, res) {
    res.render('index.html');
});
app.get("/mercury", function(req, res) {
    res.render('mercury.html');
});
app.get("/venus", function(req, res) {
    res.render('venus.html');
});
app.get("/earth", function(req, res) {
    res.render('earth.html');
});
app.get("/mars", function(req, res) {
    res.render('mars.html');
});
app.get("/jupiter", function(req, res) {
    res.render('jupiter.html');
});
app.get("/saturn", function(req, res) {
    res.render('saturn.html');
});
app.get("/uranus", function(req, res) {
    res.render('uranus.html');
});
app.get("/neptune", function(req, res) {
    res.render('neptune.html');
});
app.get("/pluto", function(req, res) {
    res.render('pluto.html');
});
//routes end


//server listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("express server is Running...");
});

