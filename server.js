var http = require('http');
var fs = require('fs'); // Require filesystem to read html files
var index = fs.readFileSync('a.html')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(index);
}).listen(8080);