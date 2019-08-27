var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.json());

require("./routes")(app);



app.listen(8000, function () {
    console.log("listening on port 8000");
});

