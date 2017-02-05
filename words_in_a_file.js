class Words {
  constructor(fileName, number) {
    this.fileName = fileName
    this.number = number || 0
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
    let onlyTopWords = this.putTopWords(removedConjunction)
    this.displayFinalResult(onlyTopWords)

    return 'Finish'
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

    let conjunctions =['and','who','which','where','why','how','that','while',
                  'before','whether','although','though','since','so','that',
                  'until','as','after','if','because','unless','than','but','or',
                  'for','only','of','is','on','the','an','at','ay','in','to','by',
                  'it','th','ref','set','with'];

    let removedWordLessThan3Char = this.removeWordLessThan3Character(words)
    let result = removedWordLessThan3Char.filter(word => conjunctions.indexOf(word[0].toLowerCase()) === -1);

    return result
  }

  removeWordLessThan3Character(words){
    for (let i = words.length - 1; i >= 0; i--) {
      if (words[i][0].length <= 2) {
        words.splice(i, 1)
      }
    }

    return words
  }

  putTopWords(words){
    let result = []
    for (var i = 0; i < this.number; i++) {
      result.push(words[i])
    }
    return result
  }

  displayFinalResult(topWords){
    console.log('--- The most commonly word in the file is ---');
    for (var i = 0; i < topWords.length; i++) {
      console.log(topWords[i][0] + ' with ' + topWords[i][1] + ' occurrences');
    }
  }
}

let play = new Words('source.txt', 4)
console.log(play.mostFrequentCount());

console.log('---- Release 2 ----');

let play2 = new Words('')

// actual conversion code starts here
