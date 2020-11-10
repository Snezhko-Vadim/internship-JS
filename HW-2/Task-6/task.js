let hasCycle = function(head) {
    let currentElem = head;
    let referenceCountMap = new Map();
    while(currentElem){
        if(!referenceCountMap.has(currentElem)){
            referenceCountMap.set(currentElem,1);
        }
        else{
            return true;
        }
        currentElem = currentElem.next
    }
    return false;
};