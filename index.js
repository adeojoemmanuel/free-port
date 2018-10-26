#!/usr/bin/env node
'use strict'

const terminal = require('./terminal')
const args = require('get-them-args')(process.argv.slice(2))
const validobject = []
const portres = args.port || args.unknown

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

if(portres != validobject){
	terminal(portres);
	// process.exit();
}

function freethenport(port) {
  return new Promise((resolve, reject) => {
    if (!Number.parseInt(port)) {
      return reject(new Error ('Invalid argument for port'));
    }
    // we need to resolve before killing the process or entire app stops
    resolve(`Process on port ${port} killed`);
    return shell(`lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`);
  });
}

module.exports = freethenport;