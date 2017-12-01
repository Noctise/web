const http = require("http");
const express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(8080);

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/index. css", (req, res) => {
    res.sendFile(__dirname + "/public/index.css");
});
app.get("/logo", (req, res) => {
    res.sendFile(__dirname + "/public/logo.jpg");
});
app.get("/jquery", (req, res) => {
    res.sendFile(__dirname + "/public/jquery-1.11.3.js");
});


