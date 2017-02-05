// const fs = require('fs');
//
// var data = fs.readFileSync(ordered_wordlist.txt).toString().split(.....)


// var sys = require('sys');
const fs = require('fs');
const conjunction = ['FOR', 'AND', 'NOR', 'BUT', 'OR', 'YET', 'SO', 'THE', 'IS', 'OF', 'THE', 'REF', 'IN', 'TO', 'A', 'AN', 'AS', 'BY', 'PP', 'THAT','HIS', 'S', 'P', 'J', 'WITH', 'IT', 'FROM']

const most_common_words = (source,wordsToBeShowed) => {
  let dataWords = fs.readFileSync(source).toString().match(/[\w]+/g)
  let wordList = []
  let count = []
  for(let i=0; i<dataWords.length; i++){
    if(!wordList.includes(dataWords[i].toUpperCase()) && !conjunction.includes(dataWords[i].toUpperCase()) ){
      wordList.push(dataWords[i].toUpperCase())
      count.push(1)
    }else{
      count[wordList.indexOf(dataWords[i].toUpperCase())]+= 1
    }
  }

  for(var i=1; i<count.length; i++){
    for(var j=0; j<i; j++){
      if(count[i]> count[j]){
        var tempCount = count[i]
        var tempWord = wordList[i]

        count[i] = count[j]
        count[j] = tempCount

        wordList[i] = wordList[j]
        wordList[j] = tempWord
      }
    }
  }

  // console.log(wordList[count.indexOf(Math.max(...count))]);
  for(let i = 0; i<wordsToBeShowed; i++){
    console.log(`'${wordList[i]}' : ${count[i]}`)
  }
}

most_common_words('source2.txt',3)

// actual conversion code starts here
