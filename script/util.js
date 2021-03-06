var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

function writeFile(filename, data, cb) {
  var splitFileName = filename.split(path.sep);
  if (splitFileName.length > 1) {
    splitFileName.pop();
    mkdirp(splitFileName.join(path.sep), function(err) {
      if (err) {
        console.log(err); // eslint-disable-line
      }
      write(filename, data);
    });
  } else {
    write(filename, data);
  }

  function write(file, content) {
    fs.writeFile(file, content, function(err) {
      if (err) {
        return console.log(err); // eslint-disable-line
      }
      if (cb) {
        cb();
      }
    });
  }
}

module.exports = {
  writeFile: writeFile
};
