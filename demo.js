var websocket = require('./')
var elstreamo = require('el-streamo')
ws = websocket('ws://localhost:8080')
var elstream = elstreamo.writable('#messages')
ws.on('data', function(c) { console.log(c) })
ws.pipe(elstream)
