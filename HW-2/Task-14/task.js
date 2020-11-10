let detectCycle = function(head) {
    let currentElem = head;
    let referenceCountMap = new Map();
    while(currentElem){
        if(!referenceCountMap.has(currentElem)){
            referenceCountMap.set(currentElem,1);
        }
        else{
            return currentElem;
        }
        currentElem = currentElem.next;
    }
    return 0;
};