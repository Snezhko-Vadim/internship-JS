let flatten = function(head) {
    if(head === null){
        return null;
    }
    const flat = function (head) {
        let currentNode = head;
        let child;
        while(currentNode){
            if(currentNode.child){
                child = currentNode.child;
                let currentChildNode = child;
                currentNode.child = null;
                child.prev = currentNode;
                while(currentChildNode.next){
                    currentChildNode = currentChildNode.next;
                }
                currentChildNode.next = currentNode.next;
                if(currentNode.next){
                    currentNode.next.prev = currentChildNode;
                }
                currentNode.next = child;
                flat(child);
            }
            else{
                currentNode = currentNode.next;
            }
        }
    }
    flat(head);
    return head;
};



const generatorOfDoublyLinkedList = function (arrayOfval){ // это генератор для проверки задания в консоли, чтобы вручную не писать и дебажить можно было (чайлды равны null);
    function Node(val, prev = null, next = null, child = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
    let list = new Node(arrayOfval[0]);
    let currentNode = list;
    for(let i = 1; i<arrayOfval.length; i++){
        currentNode.next = new Node(arrayOfval[i], currentNode);
        currentNode = currentNode.next;
    }
    return list;
}