const freeport = require('./')
const http = require('http')
const port = 8090
const ps = require('portscanner');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

server.listen(port, () => {
  setTimeout(() => {
    freeport(port)
    /*ps.checkPortStatus(port, (err, status)=>{
		if(status == "open")
			freeport(port)
		else
			throw new Error("Port ${port} is not currently running");
		// throw new Error
	})*/
  }, 1000)
})
