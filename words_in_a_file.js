class Words {
  constructor(fileName, number) {
    this.fileName = fileName
    this.number = number
  }

  parse(){
    let fs = require('fs')
    let parsed = fs.readFileSync(this.fileName).toString()
    return parsed
  }

  toArray(string){
    let pattern = /[a-z]+/gi
    return string.match(pattern)
  }

  mostFrequentCount(){
    let stringWords = this.parse()
    let arrWords = this.toArray(stringWords)
    var arr = arrWords.sort()
    var words = { };
    for (var i = 0, j = arr.length; i < j; i++) {
       if (words[arr[i]]) {
          words[arr[i]]++;
       }
       else {
          words[arr[i]] = 1;
       }
    }
    // Sorting
    let sorted = this.sort(words)
    // remove the conjunctions
    let removedConjunction = this.removeConjunction(sorted)
    // pick only the top 3
    console.log(removedConjunction);
    // let onlyTop3 = this.putTop3(removedConjunction)
    // console.log(onlyTop3);
  }

  sort(words){
    var sortable = [];
    for (var word in words){
      sortable.push([word, words[word]])
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1]
    })
    return sortable
  }

  removeConjunction(words){

    let conjunctions =['and','who','Which','Where','Why','How','That','While',
                  'Before','Whether','Although','though','Since','so','that',
                  'until','as','after','if','Because','Unless','than','but','or',
                  'for','only','of','is','on','the','an','at','ay','in','to','by',
                  'it','th','ref','set','with'];
    // remove if it a char not word
    console.log('-------------------------------');
    
    let result = this.remover(words, 0, 'the')
    console.log(result);
    // for (let i = result.length -1; i >= 0 ; i--) {
    //
    //   if (result[i][0].length <= 2) {
    //     result.splice(i, 1)
    //   } else {
    //     for (let j = 0; j < conjunctions.length; j++) {
    //
    //
    //       if (conjunctions[j].toLowerCase() == result[i][0].toLowerCase()) {
    //         result.splice(j, 1)
    //       }
    //     }
    //   }
    // }
    // return result
  }

  remover(words, index, conjunction){
    let found = words[index].indexOf(conjunction)

    while (found !== -1) {
      words.splice(found, 1)
      found = words.indexOf(conjunction)
    }

    return words
  }

  // putTop3(words){
  //   let result = []
  //   for (var i = 0; i < 3; i++) {
  //     result.push(words[i])
  //   }
  //   return result
  // }
}



let play = new Words('source.txt', 3)
console.log(play.mostFrequentCount());

// actual conversion code starts here
