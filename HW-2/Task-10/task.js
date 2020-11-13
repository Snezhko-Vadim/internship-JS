let firstUniqChar = function(s) {
    let objOfRepeatingLetters = new Map;
    for(let i = 0; i < s.length; i++){
        if(!objOfRepeatingLetters.has(s[i])){
            objOfRepeatingLetters.set(s[i],1);
        }
        else{
            objOfRepeatingLetters.set(s[i],objOfRepeatingLetters.get(s[i])+1);
        }
    }
    for(letterRepeats of objOfRepeatingLetters.keys()){
        if(objOfRepeatingLetters.get(letterRepeats) === 1){
            return s.indexOf(letterRepeats);
        }
    }
    return -1;
};