const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue.js');

var randomDirection = () => {
var directions = ['left', 'right', 'down', 'up']
var index = Math.floor(Math.random() * 4)
return directions[index]
}

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

// let messageQueue = null;
// module.exports.initialize = (queue) => {
//   messageQueue = queue;
// };

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    console.log('server get check')
    res.write(messageQueue.dequeue())
  } else if (req.method === 'POST') {
    console.log(req);
req.on('data', (chunk) => {
  console.log('This is CHUNK', chunk)
})
    // module.exports.initialize(req);
    // console.log(messageQueue);
    // res.write(messageQueue);
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!

};
