let isAnagram = function(s, t) {
    let arrS = s.match(/\w/g);
    let arrT = t.match(/\w/g);
    for(let i = 0; i<arrT.length; i++){
        if(!arrS.includes(arrT[i])){
            return false;
        }
    }
    return true;
};