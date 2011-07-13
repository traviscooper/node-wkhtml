var pdf = require('../').pdf;
    assert = require('assert'),
    should = require('should');

module.exports = {
  
  "Should default the basic command" : function() {
    var PDF = require('../').pdf();
    new PDF().command.should.equal("wkhtmltopdf");
  }
  
}