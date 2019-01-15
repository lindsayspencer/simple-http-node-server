// create http server on port 3000
// add request handler that creates hello-world.txt file
// add content 'hello to this great world'

const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if(err) throw err;
    console.log('success');
  });
  response.end(`Handling request on ${port}`);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log(`server is listening on ${port}`);
});
