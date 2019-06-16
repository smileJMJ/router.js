const fs = require('fs');
const http = require('http');
const url = require('url');

console.log(url);

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hellow World\n');
}).listen(7777);

console.log('Server running at http://localhost:7777');