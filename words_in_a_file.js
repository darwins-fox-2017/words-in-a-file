var fs       = require('fs');
var readFile = fs.readFileSync('source.txt','utf-8');

function checkFile(dataFile) {
  if (!dataFile) {
    console.log('error');
  }else {
    return readFile
  }
}

console.log(checkFile(readFile));
