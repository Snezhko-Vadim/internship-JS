let middleNode = function(head) {
    let linkedList = {
        length: 0,
        node: {},
    };
    function Node(value=0,nextElem=null){
        this.value = value;
        this.nextElem = nextElem;
    };
    function addElemToLL(linkedList,value){
        let node = new Node(value);
        let currentNode = linkedList.node;
        if(linkedList.length===0){
            linkedList.node = node;
            linkedList.length++;
            return node;
        }
        else{
            while(currentNode.nextElem){
                currentNode = currentNode.nextElem;
            }
            currentNode.nextElem = node;
            linkedList.length++;
            return node;
        }
    };
    function searchItemInLL(linkedList,index){
        let currentNode = linkedList.node;
        let counter=0;
        while(counter!==index){
            currentNode = currentNode.nextElem;
            counter++;
        }
        return currentNode;
    }
    addElemToLL(linkedList,head);
    for(let i = 1; i<head.length; i++){
        addElemToLL(linkedList,[...head].slice(i));
    }
    if(linkedList.length%2===0){
        return searchItemInLL(linkedList,linkedList.length/2).value;
    }
    else{
        return searchItemInLL(linkedList,(linkedList.length-1)/2).value;
    }
};
console.log(middleNode([1,2,3,4,5]));