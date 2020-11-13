let isEven = (num)=>{ return num%2===0 ? true : false};
let thePartitioning = function(pred, items) {
    let arrOfConditionsResults=[];
    for(let i = 0; i<items.length; i++){
        arrOfConditionsResults.push(pred(items[i]));
    }
    for(let i = 0; i<arrOfConditionsResults.length; i++){
        for(let j = 0; j<arrOfConditionsResults.length-1; j++){
            if(arrOfConditionsResults[j]===true && arrOfConditionsResults[j+1]===false){
                tmp = arrOfConditionsResults[j];
                arrOfConditionsResults[j] = arrOfConditionsResults[j+1];
                arrOfConditionsResults[j+1] = tmp;
                tmp = items[j];
                items[j] = items[j+1];
                items[j+1] = tmp;
            }
        }
    }
    let numOfFirstTrue=arrOfConditionsResults.findIndex((item)=>item===true);
    return numOfFirstTrue;
}
let items = [1, 2, 3, 4, 5, 6];
thePartitioning(isEven,items);
console.log(items);