# node-wkhtml

Wrapper for the **wkhtmltopdf** and **wkhtmltoimage** shell utilities. Converts html to pdf or image format using the webkit rendering engine, and qt.

See: https://github.com/antialize/wkhtmltopdf

## Usage
Generate a PDF of node doc and pipe to response.

    var wkhtml = require('node-wkhtml');
    wkhtml
        .spawn('pdf', 'http://nodejs.org/api/all.html')
        .stdout.pipe(response);
      
Generate a PDF of node doc and write it to the file system.

    var wkhtml = require('../index.js'),
        createWriteStream = require('fs').createWriteStream;
        
    wkhtml
      .spawn('pdf', 'http://nodejs.org/api/all.html')
      .stdout.pipe(createWriteStream('node_doc.pdf'));


Generate a PDF from a string and pipe it to the response
    
    var wkhtml = require('node-wkhtml')
    
    var pdf = wkhtml.spawn('pdf');
    pdf.stdout.pipe(response);
    pdf.stdin.end('<h1>Hello World</h1>');

See http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf_0.10.0_rc2-doc.html.


## wkhtmltopdf & wkhtmltoimage Installation

Download the appropriate utility from http://code.google.com/p/wkhtmltopdf/downloads/list. Compilation instructions can be found here: http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf_0.10.0_rc2-doc.html

**The pdf and image features are in separate utilities**. You will need to download the utility for the feature(s) you plan on using.

## node-khtml Installation

    npm install node-wkhtml
    
## Examples
See the /examples directory.

