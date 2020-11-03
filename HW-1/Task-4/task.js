let reverseString = function(s) {
    let arrWord = s;
    let tmp;
    let numOfItrs;
    if(arrWord.length%2===0){
        numOfItrs = arrWord.length/2;
    }
    else{
        numOfItrs = (arrWord.length-1)/2
    }
    for(let i = 0; i < numOfItrs; i++){
        tmp = arrWord[i];
        arrWord[i] = arrWord[arrWord.length-1-i];
        arrWord[arrWord.length-1-i] = tmp;
    }
    return arrWord;
};

console.log(reverseString(["h","e","l","l","o"]));