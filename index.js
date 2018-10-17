#!/usr/bin/env node
'use strict'

const freeport = require('./function')
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
	terminal(portres)
}

module.exports = function (port) {
	freeport(port)
		.then(() => console.log(`Process on port ${port} killed`))
		.catch((error) => console.error(error))
}
