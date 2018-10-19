const http = require('http');
const freeport = require('./update');

const port = 8080;

const server = http.createServer((req, res)  => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

server.listen(port, () => {
  setTimeout(() => {
    freeport(port)
      .then(res => console.log(res))
      .catch(error => console.error(error));
  }, 1000);
});