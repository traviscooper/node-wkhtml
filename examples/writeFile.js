var wkhtml = require('../index.js'),
    createWriteStream = require('fs').createWriteStream;

// From URL
wkhtml
  .spawn('pdf', 'http://nodejs.org/api/all.html')
  .stdout.pipe(createWriteStream(__dirname + "/pdfFromURL.pdf"));
             
// From File
wkhtml
  .spawn('pdf', __dirname + '/hello.html')
  .stdout.pipe(createWriteStream(__dirname + "/pdfFromFile.pdf"));

// From String
var pdf = wkhtml.spawn('pdf');
pdf.stdout.pipe(createWriteStream(__dirname + "/pdfFromString.pdf"));
pdf.stdin.end('<h1>Hello World</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>', 'utf-8');
