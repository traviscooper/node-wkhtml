var http = require('http'),
    wkhtml = require('../index.js');


http.createServer(function (request, response) {
  var pdf = wkhtml.spawn('pdf');
  pdf.stdout.pipe(response);
  pdf.stdin.end('<h1>Hello World</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', 'utf-8');
}).listen(8000);
