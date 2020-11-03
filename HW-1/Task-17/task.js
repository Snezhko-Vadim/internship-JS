let rotate = function(matrix) {
    let n=matrix.length;
    let tmp;
    let numOfIt;
    for(i=0;i<n;i++){//транспонируем матрицу
        for(j=i;j<n;j++){
            tmp = matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=tmp;
        }
    }
    if(n%2===0){
        numOfIt=n/2;
    }
    else{
        numOfIt=(n-1)/2;
    }
    for(i=0;i<n;i++){//меняем столбцы в обратном порядке
        for(j=0;j<numOfIt;j++){
            tmp = matrix[i][j];
            matrix[i][j]=matrix[i][n-1-j];
            matrix[i][n-1-j]=tmp;
        }
    }
    return matrix;
};
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));