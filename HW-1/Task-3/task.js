let lengthOfLastWord = function (s) {
    let arrWords = s.split(' ');
    return arrWords[arrWords.length-1].length;
}
let str = 'vadim snezhok array raTaTa';
console.log(lengthOfLastWord(str));