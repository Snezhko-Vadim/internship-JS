let reverseVowels = function(s) {
    let vowels = 'aeiouyAEIOUY';
    let vowelsInS =[];
    let vowelsIndexInS =[];
    for(let i = 0; i<s.length; i++){
        for(let j = 0; j<vowels.length; j++){
            if(s[i]===vowels[j]){
                vowelsInS.push(s[i]);
                vowelsIndexInS.push(i);
            }
        }
    }
    let tmp;
    let numOfIt;
    if(vowelsInS.length%2===0){
        numOfIt=vowelsInS.length/2;
    }
    else{
        numOfIt=(vowelsInS.length-1)/2;
    }
    for(let i = 0; i<numOfIt; i++){
        tmp=vowelsInS[i];
        vowelsInS[i]=vowelsInS[vowelsInS.length-1-i];
        vowelsInS[vowelsInS.length-1-i]=tmp;
    }
    s=s.split('');
    for(let j = 0; j<vowelsInS.length; j++){
        s[vowelsIndexInS[j]]=vowelsInS[j];
    }
    s=s.join('');
    return s;
};

let s ='aA';
console.log(reverseVowels(s));