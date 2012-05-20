# node-wkhtml

Wrapper for the **wkhtmltopdf** and **wkhtmltoimage** shell utilities. Converts html to pdf or image format using the webkit rendering engine, and qt.

See: https://github.com/antialize/wkhtmltopdf

## Example

    // Generate PDF constructor with global options for internal links disabled
    var PDF = require("node-wkhtml").pdf({ disable-internal-link: true });

## wkhtmltopdf & wkhtmltoimage Installation

Download the appropriate utility from http://code.google.com/p/wkhtmltopdf/downloads/list. Compilation instructions can be found here: http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf_0.10.0_rc2-doc.html

**The pdf and image features are in separate utilities**. You will need to download the utility for the feature(s) you plan on using.

## node-khtml Installation

    npm install node-wkhtml
    
## PDF Usage

Create a PDF constructor with default global options. See http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf_0.10.0_rc2-doc.html for option documentation.
    
    // All PDFs created with this constructor will by default have 10mm margins
    var PDF = require("node-wkhtml").pdf({ 
      '--margin-top': 10, 
      '--margin-bottom': 10, 
      '--margin-left': 10, 
      '--margin-right': 10,
      '--orientation': 'Landscape'
    });
    
To create a PDF object,  invoke the generated constructor.

    var PDF = require("node-wkhtml").pdf();

    // Generate PDF from URL
    var urlPDF = new PDF({ url: "www.google.com" });

    // Generate PDF from file
    var filePDF = new PDF({ filename: "foo.html" });
 
    // Generate PDF from HTML
    var htmlPDF = new PDF({ html: "<h1>Hello World</h1>" });

    // stdout
    new PDF({url: "www.google.com"}).convert(function(err, stdout) {
      console.log(stdout); // outputs contents of the PDF.
    });


See http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltopdf_0.10.0_rc2-doc.html.

## Image Usage

Create an image constructor with default global options. See http://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltoimage_0.10.0_rc2-doc.html for option documenation.

    // All images created with this constructor will by default be 900px wide
    var Image = require("node-wkhtml").image({ width: 900 });
    
    // Generate image from URL
    var urlImage = new Image({ url: "www.google.com" });
    
    // Generate image from file
    var fileImage = new Image({ filename: "foo.html" });
    
    // Generate PDF from HTML
    var htmlImage = new Image({ html: "<h1>Hello World</h1>" });
    
    // stdout
    new Image({url: "www.google.com"}).convert(function(err, stdout) {
      console.log(stdout); // outputs contents of the png.
    });