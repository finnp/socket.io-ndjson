#!/usr/bin/env node

if(process.argv.length < 4)
  return console.error('Usage: socketio <url> <eventname>')

var socket = require('socket.io-client')(process.argv[2])

var ev = process.argv[3] || 'message'

socket.on(ev, function (message) {
  console.log(JSON.stringify(message))
})