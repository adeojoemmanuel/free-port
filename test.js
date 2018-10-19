/* eslint-env jest */
'use strict'

const freeport = require('./function')

const port = 8071;
freeport(port)
      .then(res => console.log(res))
      .catch(error => console.error(error));