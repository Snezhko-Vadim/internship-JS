let prefill = function(n,v){
    if(n>=0 || Number.isInteger(Number(n))){
        let answer = [];
        for(let i = 0; i<n; i++){
            answer.push(v);
        }
        return answer;
    }
    else{
        throw new TypeError(`${n} is invalid`);
    }
}
console.log(prefill('3a',5));