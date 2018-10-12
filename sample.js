const freeport = require('./')
const http = require('http')
const port = 8090

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

server.listen(port, () => {
  setTimeout(() => {
    freeport(port)
  }, 1000)
})
