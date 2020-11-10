let numJewelsInStones = function(J, S) {
    let objOfRepeatingLetters = new Map;
    for(let i = 0; i < J.length; i++){
        objOfRepeatingLetters.set(J[i],0);
    }
    for(let i = 0; i < S.length; i++){
        if(objOfRepeatingLetters.has(S[i]) && J.includes(S[i])){
            objOfRepeatingLetters.set(S[i],objOfRepeatingLetters.get(S[i])+1);
        }
    }
    let sum = 0;
    for(letterRepeats of objOfRepeatingLetters.keys()){
        sum = sum + objOfRepeatingLetters.get(letterRepeats);
    }
    return sum;
};