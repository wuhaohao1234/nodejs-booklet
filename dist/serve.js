"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var url_1 = __importDefault(require("url"));
function start(callback) {
    var onRequest = function (request, respnse) {
        var urlLib = request.url || '';
        var pathname = url_1.default.parse(urlLib).pathname || '';
        callback(pathname);
        respnse.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        respnse.write('hello ts-node');
        respnse.end();
    };
    var app = http_1.createServer(onRequest);
    app.listen(3000, function () {
        console.log('the serve Listern 3000');
    });
    return app;
}
exports.default = start;
