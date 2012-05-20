var spawn = require('child_process').spawn

function buildArgs(options, defaults) {
    var args = [];
    for (name in options) {
      var value = options.hasOwnProperty(name) ? options[name] : defaults.hasOwnProperty(name) ? defaults[name] : null;
      if (value === true) {
        args.push('--' + name)
      } else if (value !== false) {
        args.push('--' + name + '=' + value);
      }
    }
    args.push('-')
    return args;
}


var defaults = module.exports.defaults = function(defaults) {

  var defaultEnv = defaults.env || process.env,
      pdf = defaults.pdf || {},
      png = defaults.png || {};

  return {
    spawn: function(format, input, opts, env) {
      var executable,
          defaults;

      if (format === "pdf") {
        executable = 'wkhtmltopdf'
        defaults = pdf;
      } else if (format == "png") {
        executable = 'wkhtmltoimg'
        defaults = png;
      } else {
        throw "Unsupported format. Use 1 of pdf or png"
      }

      var args = buildArgs(opts || {}, defaults);
      console.log(executable, [input].concat(args))
      return spawn(executable, [input || '-'].concat(args), env || defaultEnv);
    }
  }
}

var wkhtml = defaults({});
module.exports.spawn = wkhtml.spawn;
