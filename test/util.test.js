var util = require("../lib/util"),
    assert = require('assert'),
    should = require('should');

module.exports = {
  
  "Should build empty options" : function() {
    util.buildOptions({}).join("").should.equal("");
  },
  
  "Should build option": function() {
    util.buildOptions({foo: "bar"}).join("").should.equal(" --foo bar");
  },
  
  "Should build an empty pdf command" : function() {
    var PDF = require('../').pdf();
    var pdf = new PDF();
    util.buildCommand(pdf).should.equal("wkhtmltopdf -");
  },
  
  "Should build a url pdf command to stdout" : function() {
    var PDF = require('../').pdf();
    var pdf = new PDF();
    
    pdf.add({ url: "www.google.com" });
    util.buildCommand(pdf).should.equal("wkhtmltopdf www.google.com -");
  },
  
  "Should build a filename pdf command to stdout" : function() {
    var PDF = require('../').pdf();
    var pdf = new PDF();
    
    pdf.add({ filename: "foo.html" });
    util.buildCommand(pdf).should.equal("wkhtmltopdf foo.html -");
  },
  
  "Should build a stdin pdf command to stdout" : function() {
    var PDF = require('../').pdf();
    var pdf = new PDF();
    
    pdf.add({ html: "<h1>hello world</h1>" });
    util.buildCommand(pdf).should.equal("echo '<h1>hello world</h1>' | wkhtmltopdf - -");
  },
  
  "Should build a url pdf command to file" : function() {
    var PDF = require('../').pdf();
    var pdf = new PDF();
    
    pdf.add({ url: "www.google.com" });
    util.buildCommand(pdf, "foo.pdf").should.equal("wkhtmltopdf www.google.com foo.pdf");
  },
  
  "Should build an empty image command" : function() {
    var IMG = require("../").image();
    var img = new IMG();
    
    util.buildCommand(img).should.equal("wkhtmltoimage -");
  },
  
  "Should build a url image command to stdout": function() {
    var IMG = require('../').image();
    var img = new IMG({ url: "www.google.com" });
    util.buildCommand(img).should.equal("wkhtmltoimage www.google.com -");
  },
  
  "Should build a file image command to stdout": function() {
    var IMG = require('../').image();
    var img = new IMG({ filename: "foo.html" });
    util.buildCommand(img).should.equal("wkhtmltoimage foo.html -");
  },
  
  "Should build a stdin image command to stdout" : function() {
    var IMG = require('../').image();
    var img = new IMG({ html: "<h1>hello world</h1>" });
    util.buildCommand(img).should.equal("echo '<h1>hello world</h1>' | wkhtmltoimage - -");
  },
  
  "Should build a url image command to file" : function() {
    var IMG = require('../').image();
    var img = new IMG({ url: "www.google.com" });
    util.buildCommand(img, "foo.png").should.equal("wkhtmltoimage www.google.com foo.png");
  },
  
}