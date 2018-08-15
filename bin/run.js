'use strict';
//createing the server
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);
//server listening on port 3000
server.listen(3000);

server.on('listening', function() {
  console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')}`)
});
