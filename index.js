var http = require('http');

var host = process.env.HOST || "localhost";
var port = parseInt(process.env.PORT || "5000");
var delays = (process.env.DELAYS || "200:500")
             .split(':').map(function(element) {
               return parseInt(element, 10);
             });
var minDelay = delays[0];
var maxDelay = delays[1];

var server = http.createServer(function (req, res) {
  var delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
  setTimeout(function() {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK');
  }, delay);
});

console.log('Server running at http://' + host +':' + port +
            '. Delays: ' + delays);

server.listen(port, host);
