/*var ps = require('portscanner');

ps.checkPortStatus(443, (err, stat)=>{
	console.log(stat);
})*/

const http = require('http');
const freeport = require('./update');
const ps = require('portscanner');

const port = 8080;

const server = http.createServer((req, res)  => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

// ps.checkPortStatus(port, (err, status)=>{
// 	status == "open" ? run() :
// })

var run = server.listen(port, () => {
  setTimeout(() => {
    freeport(port)
      .then(res => console.log(res))
      .catch(error => console.error(error));
  }, 1000);
});