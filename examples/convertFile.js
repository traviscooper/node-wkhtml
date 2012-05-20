var http = require('http'),
    wkhtml = require('../index.js');


http.createServer(function (request, response) {
  wkhtml
    .spawn('pdf', __dirname + '/hello.html')
    .stdout.pipe(response);
}).listen(8000);
