const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));





app.get("/", function(req, res) {
    res.render('index.html');
});



// app.listen("8080", "127.0.0.1", function() {
//     console.log("express server is Running...");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})