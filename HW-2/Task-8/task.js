let isAnagram = function(s, t) {
    if(s.length === 0 && t.length === 0){
        return true;
    }
    else if(s.length !== t.length){
        return false;
    }
    let arrS = s.match(/\w/g);
    let arrT = t.match(/\w/g);
    let isContains;
    for(let j = 0; j < arrT.length; j++){
        isContains = false;
        for(let i = 0; i<arrS.length; i++){
            if(arrS[i]===arrT[j]){
                arrS.splice(arrS.indexOf(arrT[j]),1);
                isContains = true;
                break;
            }
        }
        if(isContains === false){
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram","nagaram"));