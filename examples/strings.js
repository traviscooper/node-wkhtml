var http = require('http'),
    wkhtml = require('node-wkhtml');


http.createServer(function (request, response) {
  wkhtml
    .spawn('pdf', 'http://nodejs.org/api/all.html')
    .pipe(response);
}).listen(8000);
