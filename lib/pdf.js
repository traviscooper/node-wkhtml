var util = require("./util.js");
var spawn = require('child_process').spawn;

module.exports = function(options) {

  var globalOptions = util.buildOptions (options);
  
  function PDF(document) {
    this.objects = document ? [document] : [];
  }

  PDF.prototype.convert = function(callback, filename) {    
    var cmdOptions = globalOptions;
    cmdOptions = cmdOptions.concat (util.buildCmdOptions(this.objects[0], filename));

    var convert = spawn("wkhtmltopdf",cmdOptions); 
    
    //take care of direct stdin html
    if (this.objects[0].html) {
      var inputHTML = spawn ("echo", [this.objects[0].html]);
      inputHTML.stdout.on('data', function (data) {
          convert.stdin.write(data);
      });
      inputHTML.on ('exit', function () {
          convert.stdin.end();
      });
    }

    var pdf = [];
    var err;

    convert.stdout.on('data', function (data) {
        pdf.push(data);
    });

    convert.stderr.on('data', function (data) {
        err += data;
    });

    convert.on ('exit', function (code) {
        if (code) {
          console.log ('child process exited with code ' + code);
        } else if (!filename) {
          //combine the buffers
          var size = 0;
          for (var i=0; i < pdf.length; ++i) {
            size+= pdf[i].length;
          }
          var combinedBuffer = new Buffer (size);
          var pos = 0;
          for (var i=0; i < pdf.length; ++i) {
            pdf[i].copy(combinedBuffer, pos, 0, pdf[i].length);
            pos += pdf[i].length;
          }

          callback (err, combinedBuffer);
        } else {
          callback (err);
        }
    });
  }
  
  return PDF;

};
