#!/usr/bin/env node
'use strict'

const freethenport = require('./function')

module.exports = function (port) {
	if(!Number.parseInt(port)){
    	console.log('Invalid argument for port')
	}else{
		freethenport(port).then(() => console.log(`Process on port ${port} killed`))
		.catch(() => console.log(`Could not kill process on port ${port}`))
	}
}
