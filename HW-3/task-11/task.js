var WordDictionary = function() {
  this._dictionary = [];
};
WordDictionary.prototype.addWord = function(word) {
  this._dictionary.push(word);
};
WordDictionary.prototype.search = function(word) {
  for(let j = 0; j<this._dictionary.length; j++){
    let wordFromDictionary = this._dictionary[j];
    let isFind = true;
    let longerWordLength;
    if(wordFromDictionary.length>word.length){
      longerWordLength = wordFromDictionary.length;
    }
    else{
      longerWordLength = word.length;
    }
    for(let i = 0 ; i<longerWordLength; i++){
      if(wordFromDictionary[i] === word[i] || (word[i] === '.' && wordFromDictionary[i])){
        continue;
      }
      else{
        isFind = false;
        break;
      }
    }
    if(isFind){
      return true;
    }
  }
  return false;
}