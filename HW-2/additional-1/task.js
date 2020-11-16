var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    else if(l2 === null){
        return l1;
    }
    const deepClone = function(newObj,copiedObj){
        for(let key in copiedObj){
            if(typeof copiedObj[key] === 'object' && copiedObj[key]!==null){
                newObj[key] = {};
                deepClone(newObj[key],copiedObj[key]);
            }
            else{
                newObj[key] = copiedObj[key];
            }
        }
    }
    let newL = {};
    deepClone(newL,l1);
    let currentNode = newL;
    while(currentNode.next){
        currentNode = currentNode.next;
    }
    currentNode.next = l2;
    currentNode = newL;
    let newLLength = 1;
    while(currentNode.next){
        currentNode = currentNode.next;
        newLLength ++;
    }
    let tmp;
    let isSorted = false;
    while(!isSorted){
        currentNode = newL;
        isSorted = true
        let prevNode;
        while(currentNode.next){
            if(currentNode.val>currentNode.next.val){
                isSorted = false;
                let a = currentNode;
                let b = currentNode.next;
                let c = currentNode.next.next;
                b.next = a;
                if(currentNode.next.next){
                    a.next = c;
                }
                else{
                    a.next = null;
                }
                if(prevNode){
                    prevNode.next = b;
                    prevNode = prevNode.next;
                }
                else{
                    prevNode = b;
                    newL = prevNode;
                }
            }
            else{
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
    return newL;
};
mergeTwoLists(
    {},
    {}
    );