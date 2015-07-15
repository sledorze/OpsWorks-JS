var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello on : ' + req.headers.host + req.method, req.url, req.path);
}).listen(process.env.PORT);
