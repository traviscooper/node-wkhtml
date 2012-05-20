var http = require('http'),
    wkhtml = require('../index.js');


http.createServer(function (request, response) {
  console.log('Generating a PDF of http://nodejs.org/api/all.html, this may take a while.')
  wkhtml
    .spawn('pdf', 'http://nodejs.org/api/all.html')
    .stdout.pipe(response);
}).listen(8000);
