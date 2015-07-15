var http = require('http');
var os = require(“os”);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var hostname = os.hostname();
  res.end('Hello on : ' + hostname);
}).listen(process.env.PORT);
