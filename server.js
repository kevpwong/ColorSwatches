var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static( __dirname + '/dist/public/' ));

app.all("/*", (req,res,next) => {
    res.sendFile(path.join(__dirname+'/dist/public/index.html'));
  });

app.listen(port, function() {
  console.log("listening on port: " + port);
});
