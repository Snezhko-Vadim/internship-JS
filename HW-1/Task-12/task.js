let relativeSortArray = function(arr1, arr2) {
    let tmp;
    for(let j = 0; j<arr1.length; j++){
        for(let i = 0; i<arr1.length; i++){
            if(arr1[i]>arr1[i+1]){
                tmp = arr1[i];
                arr1[i] = arr1[i+1];
                arr1[i+1] = tmp;
            }
        }
    }
    let startOfArr2;
    for(let i = arr1.length-1; i>=0; i--){
        if(arr1[i]===arr2[0]){
            startOfArr2=i;
            break;
        }
    }
    for(let j = 1; j<arr2.length; j++){
        for(let i = 0; i<arr1.length; i++){
            if(arr1[i]===arr2[j]){
                arr1.splice(i,1);
                arr1.splice(startOfArr2+j,0,arr2[j]);
            }
        }
    }
    return arr1;
};
let arr1 = [2,3,1,3,2,4,6,7,9,2,19];
let arr2 = [2,1,4,3,9,6];
relativeSortArray(arr1,arr2);
console.log(arr1);