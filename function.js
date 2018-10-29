#!/usr/bin/env node
'use strict'
const exec = require('child_process').execSync;

function freethenportv1(port) {
  return new Promise((resolve, reject) => {
    if (!Number.parseInt(port)) {
      return reject(new Error ('Invalid argument for port'));
    }
    // we need to resolve before killing the process or entire app stops
    resolve(`Process on port ${port} killed`);
    return shell(`lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`);
  });
}

function freethenport(port) {
	return new Promise((resolve, reject) => {
	    if (!Number.parseInt(port)) {
	      return reject(new Error ('Invalid argument for port'));
	    }

		var processId = null
		try {
		    processId = exec(`lsof -t -i:${port}`);
		} catch (e) {
			return reject(new Error ('could not catch'));
		}
		if (processId !== null) { // if exists kill
		  	try{
		    	if(exec(`kill ${processId}`)){
		    		resolve(`Process on port ${port} killed`);
					return new Error ('closed');
				}
		    } catch(e){
				return reject(new Error ('error executing'));
		  	}
		}
	});
}

module.exports = freethenportv1;
module.exports = freethenport;