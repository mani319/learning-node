var express = require('express');
var app = express();
var url = require('url');
var morgan = require('morgan')

app.use(morgan('short'))

app.get('/', function(req, res) {
    res.send("This is default page")
});

app.get('/name/:statement', function(req, res) {
    var name = req.params.statement || "Trump";

    res.setHeader('token', 'this.is.secret');
    res.status(201).send("This is my first node app - " + name);
});

app.use(function(req, res) {
    res.status(404).send("Page not found. Please try another");
})

app.listen(8080, function() {
    console.log("Server listening on port 8080");
});
