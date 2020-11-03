let addToArrayForm = function(A,K) {
    let transfer;
    let arrK = String(K).split('');
    arrK = arrK.map((item)=>Number(item));// нет, я не извращенец. Просто сначала сделал для K как массива чисел, а потом задание дочитал и не было времени переделывать)))
    for(let j = arrK.length-1; j>=0; j--){
        transfer = arrK[j];
        for(let i = A.length-1-(arrK.length-1-j); ; i--){
            if(i<0){
                A.push(A[A.length-1]);
                for(k = A.length-1; k>0; k--){
                    A[k]=A[k-1];
                }
                i=0;
            }
            A[i]+=transfer;
            if(A[i]>=9){
                A[i]=A[i]%10;
                transfer = 1;
            }
            else{
                break;
            }
        }
    }
    return A;
};
let A = [2,1,5];
let K = 806;
addToArrayForm(A,K);
console.log(A);