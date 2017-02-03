var fs        = require('fs');
var readFile  = fs.readFileSync('source.txt','utf-8');
var stopwords = ["a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along",
  "already", "also","although","always","am","among", "amongst", "amoungst", "amount",  "an", "and", "another", "any","anyhow","anyone",
  "anything","anyway", "anywhere", "are", "around", "as",  "at", "back", "be","became", "because","become","becomes", "becoming", "been",
  "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but",
  "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail",  "do", "does", "done",  "down",
  "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every",
  "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former",
  "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have",
  "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how",
  "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is",  "it", "its", "itself", "keep",
  "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine",
  "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next",
  "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto",
  "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re",
  "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so",
  "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them",  "themselves", "then", "thence",
   "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this",
  "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two",
  "un", "under", "until", "up", "upon", "us", "very", "via", "was", "way", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where",
  "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom",
  "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the",
  // contractions?
  "didnt", "doesnt", "dont", "isnt", "wasnt", "youre", "hes", "ive", "theyll", "whos", "wheres", "whens", "whys", "hows", "whats", "were", "shes", "im", "thats"
  ];

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
        let words = notChar[i].toLowerCase().replace(/\[^A-z]/, "")
        if(stopwords.indexOf(words) === -1 && tempChar.indexOf(words) === -1){
          tempChar.push(notChar[i])
        }
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

checkFile(readFile, 3)
