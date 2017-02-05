
class fileToWord {
  constructor(string) {
   this.string=string;

  }
  stringToarrWord(string){
    var sys = require('fs');
    var source=sys.readFileSync(string).toString();
    let regexkata=/[a-z]+/gi;
    return source.match(regexkata);
  }

  stringToarrSentence(string){
    var sys = require('fs');
    var source=sys.readFileSync(string).toString();
    let regexKalimat=/[^(.?!)]+/g;
    return source.match(regexKalimat);
  }

   countWord(stringArr){
     var wordString=this.deleteNonWord(stringArr);
     //wordString.sort();
     let wordArr=[];
     for (var i = 0; i < wordString.length; i++) {
       let wordObj={};
       wordObj['word']=wordString[i];
       let sumWord=1;
       for (var j = i+1; j < wordString.length; j++) {
         if (wordString[i].toLowerCase()==wordString[j].toLowerCase()) {
           sumWord=sumWord+1;
           wordString.splice(j,1)
         }
       }
      //debugger
      wordObj['num']=sumWord;
      wordArr.push(wordObj);
     }
   return wordArr;
   }

   deleteNonWord(wordArr){
    let wordOutput;
    let nonWord=['and','who','Which','Where','Why','How','That','While','Before','Whether','Although','though','Since','so','that','until','as','after','if','Because','Unless','than','but','or',
    'for','only','of','is','on','the','an','at','ay','in','to','by','it','th','ref','set','with','pp'];
     for (var i = 0; i < wordArr.length; i++) {
       if (wordArr[i].length<2) {
         wordArr.splice(i,1);
       }
     }
       for (var j = 0; j < nonWord.length; j++) {
         for (var i = 0; i < wordArr.length; i++) {
           if (wordArr[i].toLowerCase()==nonWord[j].toLowerCase()) {
              wordArr.splice(i,1);
           }
         }
       }
       wordOutput=wordArr;
      return wordOutput
     }


   sortObject(object){
     for (var i = 1; i < object.length; i++) {
         for (var j = 0; j<i; j++) {
           if (object[i].num<object[j].num) {
             var objectI=object[i];
             var objectJ=object[j];
             object[i]=objectJ;
             object[j]=objectI;
           }
         }
     }
     return object;
   }

   getCommonWord(object,num){
     let sortedObject=this.sortObject(object);
     let outputObject=[];
     for (var i = object.length-1; i > (object.length-(num+1)); i--) {
       outputObject.push(object[i]);
     }
     return outputObject;
   }

  mostCommonWord(fileName,num){
    let fileInArr=this.stringToarrWord(fileName);
    let countedWord=this.countWord(fileInArr);
    return this.getCommonWord(countedWord, num);
  }

  lessUedWord(fileName,num){
    let fileInArr=this.stringToarrWord(fileName);
    let countedWord=this.countWord(fileInArr);
    let sortedObject=this.sortObject(countedWord);
    let outputObject=[];
    for (var i = 0; i < num; i++) {
      outputObject.push(sortedObject[i]);
    }
    return outputObject;
  }

  longestSentence(fileName){
    let arrSentence=this.stringToarrSentence(fileName)
    var WordInSentence=[];
    let regexkata=/[^\s"\n]+/gi;
    for (var i = 0; i < arrSentence.length; i++) {
      let wordInSentence=arrSentence[i].match(regexkata);
      WordInSentence.push(wordInSentence);
    }
    WordInSentence.pop()
    let longestSentenceIndex;
    let max=0;
     for (var i = 0; i < WordInSentence.length; i++) {
       if (WordInSentence[i].length>=max) {
         max=WordInSentence[i].length;
         longestSentenceIndex=i;
       }
     }
     let outputSentence=WordInSentence[longestSentenceIndex].join(" ")
    return outputSentence;
  }



}



let wordinfile = new fileToWord('source2.txt') ;
console.log('most common word :',wordinfile.mostCommonWord('source2.txt',4));
console.log('less used word :',wordinfile.lessUedWord('source2.txt', 3));
console.log('kalimat terpanjang adalah :','"'+wordinfile.longestSentence('source2.txt')+'"');
