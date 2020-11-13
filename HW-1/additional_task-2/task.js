let isPalindrome = function(s) {
  let regexp = /[0-9a-z]/ig;
  let numOfIt;
  arrOfLetters = s.match(regexp);
  if(arrOfLetters === null){
    return true;
  }
  if(arrOfLetters.length%2===0){
    numOfIt=arrOfLetters.length/2;
  }
  else{
    numOfIt=(arrOfLetters.length-1)/2;
  }
  for(let i = 0; i<arrOfLetters.length; i++){
    if(arrOfLetters[i].toUpperCase()!==arrOfLetters[arrOfLetters.length-1-i].toUpperCase()){
      return false;
    }
  }
  return true;
};