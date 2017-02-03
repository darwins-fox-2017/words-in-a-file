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

//menghitung jumlah kata yang sering muncul
    let objectCount = {}
    for (let i = 0; i < tempChar.length; i++) {
      var numCount = tempChar[i]
      if(objectCount[numCount]){
        objectCount[numCount] = objectCount[numCount] + 1
      }else {
        objectCount[numCount] = 1
      }
    }
    let wordsFrequncy = []
    for (let i in objectCount){
      wordsFrequncy.push([i,objectCount[i]])
    }

    wordsFrequncy.sort(function(a, b){return b[1] - a[1]})

    for (let i = 0; i < values; i++) {
      console.log((wordsFrequncy[i][0]));
    }
  }
}

// console.log(checkFile(readFile, 3));
checkFile(readFile, 3)
