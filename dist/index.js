"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = 3000;
var hostname = 'localhost';
var app = http_1.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('ts-node');
});
app.listen(port, hostname, function () {
    console.log("the serve listen" + port);
});
