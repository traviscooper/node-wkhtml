var exec = require('child_process').exec;
var util = require("./util.js");

module.exports = function(options) {
  
  var globalOptions = util.buildOptions(options);
  
  function PDF(document) {
    this.objects = document ? [document] : [];
  }
  
  PDF.prototype.command = "wkhtmltopdf" + util.buildOptions(options).join("");

  /**
  * { url: string, file: string, html: string, options: object }
  */
  PDF.prototype.add = function(options) {
    this.objects.push(options);
    return this;
  }

  PDF.prototype.convert = function(callback) {    
    exec(util.buildCommand(this), callback);
  }
  
  PDF.prototype.convertAs = function(filename, callback) {
    exec(util.buildCommand(this, filename), callback);
  }
  
  return PDF;

};