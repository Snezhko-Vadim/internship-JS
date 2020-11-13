let addToArrayForm = function(A,K) {
    let transfer=K;
        for(let i = A.length-1; ; i--){
            A[i]+=transfer;
            if(A[i]>=9){
                transfer = Math.trunc(A[i]/10);
                A[i]=A[i]%10;
            }
            else{
                break;
            }
            if(i===0 && transfer!==0){
                A.unshift(0);
                i=1;
            }
        }
    return A;
};