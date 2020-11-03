let sortedSquares = function(A) {
    let newArr = A.map((item) => item*=item);
    let tmp;
    for(let j = 0; j<newArr.length; j++){
        for(let i = 0; i<newArr.length; i++){
            if(newArr[i]>newArr[i+1]){
                tmp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = tmp;
            }
        }
    }
    return newArr;
};
console.log(sortedSquares([-7,-3,2,3,11]));