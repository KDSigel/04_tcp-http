const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/') {
      socket.write(createResponse({
        status:'200 OK',
        body: 'hi',
        contentType: 'text/plain'
      })
      );
    }

    if(request.method === 'GET' && request.path === '/red') {
      socket.write(createResponse({
        status:'200 OK',
        body: '<h1>red</h1>',
        contentType: 'text/html'
      })
      );
    }

    if(request.method === 'GET' && request.path === '/green') {
      socket.write(createResponse({
        status:'200 OK',
        body: '<h1>green</h1>',
        contentType: 'text/html'
      })
      );
    }

    if(request.method === 'GET' && request.path === '/blue') {
      socket.write(createResponse({
        status:'200 OK',
        body: '<h1>blue</h1>',
        contentType: 'text/html'
      })
      );
    }

    if(request.method === 'POST' && request.path === '/echo') {
      socket.write(createResponse({
        status:'200 OK',
        body: `${request.body}`,
        contentType: 'text/plain'
      })
      );
    }

    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
