let lengthOfLastWord = function (s) {
    let arrWords = s.split(' ');
    for(let i = 1; i<=arrWords.length; i++){
        if(arrWords[arrWords.length-i].length!==0){
            return arrWords[arrWords.length-i].length;
        }
    }
    return 0;
}
let str = "a ";
console.log(lengthOfLastWord(str));