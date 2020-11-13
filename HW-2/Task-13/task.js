let deleteDuplicates = function(head) {
    let currentElem = head;
    while(currentElem && currentElem.next){
        if(currentElem.val === currentElem.next.val){
            let deletingElem = currentElem.next;
            currentElem.next = deletingElem.next;
            delete deletingElem;
        }
        else if(!currentElem.next){
            break;
        }
        else{
            currentElem = currentElem.next;
        }
    }
    return head;
};