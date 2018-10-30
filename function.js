#!/usr/bin/env node
'use strict'
const exec = require('child_process').execSync;
const shell = require('execa').shell
var isWin = process.platform;

if(isWin === 'darwin') {
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
	module.exports = freethenport;
}else if(isWin === 'win32'){
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
}else{
	return reject(new Error ("unknown os"));
}

// module.exports = freethenport;
// module.exports = freethenportv1;