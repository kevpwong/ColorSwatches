var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public/' ));

//USE HEX Color regex
// app.get(([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}), function (request, response) {
//     console.log("HEX VALUE ENTERED");
//     res.redirect('/');
// });

app.all("*", (req,res,next) => {
    console.log("going to *");

    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function() {
console.log("listening on port 8000");
});
