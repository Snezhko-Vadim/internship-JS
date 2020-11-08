let deleteDuplicates = function(head){
    let currentElem = head;
    while(currentElem){
        if(currentElem.value === currentElem.nextElem.value){
            let deletingElem = currentElem.nextElem;
            currentElem.nextElem = deletingElem.nextElem;
            delete deletingElem;
        }
        else if(!currentElem.nextElem){
            break;
        }
        currentElem = currentElem.nextElem;
    }
    return head;
};
console.log(deleteDuplicates({
    value: 1,
    nextElem: {
        value: 1,
        nextElem:{
            value: 2,
            nextElem:{
                value: 3,
                nextElem:{
                    value: 3,
                    nextElem: null,
                }
            }
        }
    }
}));