var express = require('express');
var app = express();
var url = require('url');

app.get('/', function(req, res) {
    var queryObject = url.parse(req.url, true).query;
    var name = queryObject.name || "Trump";

    res.send("This is my first node app - " + name);
});

app.listen(8080, function() {
    console.log("Server listening on port 8080");
});
