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
    for(let j = arr2.length-1; j>=0; j--){
        let numOfSameElems=1;
        let firstIndexOfCurrentElem = arr1.indexOf(arr2[j]);
        for(let k = 1; ;k++){
            if(arr1[firstIndexOfCurrentElem+k]===arr1[firstIndexOfCurrentElem]){
                numOfSameElems++;
            }
            else{
                break;
            }
        }
        let addedArr = arr1.splice(firstIndexOfCurrentElem,numOfSameElems);
        arr1.splice(0,0,...addedArr);
    }
    return arr1;
};