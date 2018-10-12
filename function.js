#!/usr/bin/env node
'use strict'

const shell = require('execa').shell

module.exports = function (port) {
  if (!Number.parseInt(port)) {
    return Promise.reject(new Error('Invalid argument for port'))
  }

  return shell(`lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`)
}
