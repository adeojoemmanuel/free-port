const freethenport = require('./function');
const http = require('http');

const port = 8080;

const server = http.createServer((req, res)  => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

server.listen(port, () => {
  setTimeout(() => {
    freethenport(port)
      .then(res => console.log(res))
      .catch(error => console.error(error));
  }, 1000);
});
