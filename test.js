/* eslint-env jest */
'use strict'

// const free = require('./')

// free(8090, () => {
//   expect(free).toBeDefined()
// })
// free(8070)
const args = require('get-them-args')(process.argv.slice(2))
const portres = args.port || args.unknown

// console.log(portres)

function checckobject(anyVar){
	if(typeof anyVar == 'object' && anyVar instanceof Object && !(anyVar instanceof Array)){
		return false
	} else{
		return true
	}
}


if(checckobject(portres) == true){
	console.log("true")
}else{
	console.log("false")
}