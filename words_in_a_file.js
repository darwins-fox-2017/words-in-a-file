var fs       = require('fs');
var readFile = fs.readFileSync('source.txt','utf-8');

function checkFile(dataFile, values) {
  if (!dataFile) {
    console.log('error');
  }else {
    let notChar = dataFile.replace(/[^A-z]+/gi, " ")
        notChar = notChar.replace(/\[|\]/gi, " ")
        notChar = notChar.split(" ")

    let tempChar = []
    for (let i = 0; i < notChar.length; i++) {
      if(notChar[i] !== ""){
        tempChar.push(notChar[i])
      }
    }
    return tempChar
  }
}

console.log(checkFile(readFile));
