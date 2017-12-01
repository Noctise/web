const http = require("http");
const express = require("express");

var app = express();
var server = http.createServer(app);
server.listen(8080);

//way1: GET /user?uid=10&loc=bj
app.get("/user", (req, res) => {
    console.log(req.query.uid);
    console.log(req.query.loc);
    res.send("<h1>OK</h1>");
});
//way2: GET /book/99/jsj
app.get("/book/:bid/:btype", (req, res) => {
    console.log(req.params.bid);
    console.log(req.params.btype);
    res.send("<h1>ok</h1>");
});