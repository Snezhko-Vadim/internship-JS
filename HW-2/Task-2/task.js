let middleNode = function(head) {
    let length = 0;
    let indexOfMiddleNode;
    let currentElem = head;
    while(currentElem){
        length++;
        currentElem = currentElem.next;
    }
    if(length%2===0){
        indexOfMiddleNode = length/2;
    }
    else{
        indexOfMiddleNode = (length-1)/2;
    }
    let middle = head;
    for(let i = 0; i<indexOfMiddleNode; i++){
        middle = middle.next;
    }
    return middle;
};