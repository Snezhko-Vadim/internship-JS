const reverseList = function(head) {
    let currentNode = head;
    let length = 0;
    while(currentNode){
        length++
        currentNode = currentNode.next;
    }
    currentNode = head;
    for(let i = 0; i<length-1; i++){
        head = currentNode.next;
        let prevNode;
        for(let j = 0; j<length-1-i; j++){
            let a = currentNode;
            let b = currentNode.next;
            let c = currentNode.next.next;
            a.next = c;
            b.next = a;
            if(prevNode){
                prevNode.next = b;
                prevNode = prevNode.next;
            }
            else{
                prevNode = b;
            }
        }
        currentNode = head;
    }
    return head;

    /* РЕКУРСИВНЫЙ МЕТОД */

    /* if(head === null){
        return null;
    }
    let currentNode = head;
    while(currentNode.next){
        currentNode = currentNode.next;
    }
    let tail = currentNode;
    const recursiveReverseList = function(head,previouseNode = null){
        let prevNode = previouseNode;
        let currentNode = head;
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        head = nextNode;
        prevNode = currentNode;
        if(head){
            recursiveReverseList(head,prevNode);
        }
    }
    recursiveReverseList(head);
    return tail; */
};