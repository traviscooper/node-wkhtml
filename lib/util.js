

var buildOptions = module.exports.buildOptions = function(options) {
  var commandOptions = [];
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      commandOptions = commandOptions.concat(" ", name.length == 1 ? "-" : "--", name, " ", options[name]);
    }
  }
  return commandOptions;
};

module.exports.buildCommand = function(doc, filename) {
  var command = [doc.command];
  var stdin = null;
  
  doc.objects.forEach(function(object) {
    command = command.concat(" ", object.page || "");
    if (object.html) {
      stdin = object.html;
      command = command.concat("-");
    } else {
      command = command.concat(object.filename || object.url);
    }
    command = command.concat(buildOptions(object.options));
  });
  command = command.concat(" ", filename || "-");
  if (stdin) {
    command = ["echo '", stdin, "' | "].concat(command);
  }
  
  return command.join("");
}