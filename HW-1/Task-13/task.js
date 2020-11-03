let isEven = (num)=>{ return num%2===0 ? true : false};
let thePartitioning = function(conditionFunction, arrOfItems) {
    let arrOfConditionsResults=[];
    for(let i = 0; i<arrOfItems.length; i++){
        arrOfConditionsResults.push(conditionFunction(arrOfItems[i]));
    }
    for(let i = 0; i<arrOfConditionsResults.length; i++){
        for(let j = 0; j<arrOfConditionsResults.length-1; j++){
            if(arrOfConditionsResults[j]===true && arrOfConditionsResults[j+1]===false){
                tmp = arrOfConditionsResults[j];
                arrOfConditionsResults[j] = arrOfConditionsResults[j+1];
                arrOfConditionsResults[j+1] = tmp;
                tmp = arrOfItems[j];
                arrOfItems[j] = arrOfItems[j+1];
                arrOfItems[j+1] = tmp;
            }
        }
    }
    let numOfFirstTrue=arrOfConditionsResults.findIndex((item)=>item===true);
    return numOfFirstTrue;
}
let arrOfItems = [1, 2, 3, 4, 5, 6];
thePartitioning(isEven,arrOfItems);
console.log(arrOfItems);