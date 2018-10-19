const shell = require('execa').shell

function freePort(port) {
  return new Promise((resolve, reject) => {
    if (!Number.parseInt(port)) {
      return reject(new Error ('Invalid argument for port'));
    }
    // we need to resolve before killing the process or entire app stops
    resolve(`Process on port ${port} killed`);
    return shell(`lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`);
  });
}

module.exports = freePort;
