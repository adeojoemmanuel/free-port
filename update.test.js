const http = require('http');
const freeport = require('./update');
const ps = require('portscanner');
const port = 8080;

const server = http.createServer((req, res)  => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

server.listen(port, () => {
  setTimeout(() => {
    // freeport(port)
    //   .then(res => console.log(res))
    //   .catch(error => console.error(error));
    ps.checkPortStatus(port, (err, status)=>{
		if(status == "open")
			freeport(port).then((res)=>console.log(res)).catch(err=>console.log(err));
		else
			console.log(`Port ${port} is not currently running`);
	});
  }, 1000);
});