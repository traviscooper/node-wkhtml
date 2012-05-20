var buildOptions = module.exports.buildOptions = function(options) {
  var commandOptions = [];
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      commandOptions.push(name);
      commandOptions.push(options[name]);
    }
  }
  return commandOptions;
};

module.exports.buildCmdOptions = function (objects, filename) {
  //wkhtml options
  var cmdOptions = [];
  if (objects.options) {
    cmdOptions = buildOptions(objects.options);
  }

  //input source
  if (objects.html) {
    cmdOptions.push('-');
  } else if (objects.filename) {
    cmdOptions.push(objects.filename);
  } else {
    cmdOptions.push(objects.url);
  }

  //output
  if (filename) {
    cmdOptions.push(filename);
  } else {
    cmdOptions.push('-');
  }
    
  return cmdOptions;
};
