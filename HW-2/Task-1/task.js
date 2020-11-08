let repeatedNTimes = function(A) {
    for(let i = 0; i<A.length; i++){
        for(let j = i; j<A.length; j++){
            if(A[i]===A[j] && i!==j){
                return A[i];
            }
        }
    }
};