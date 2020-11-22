var LRUCache = function(capacity) {
    this._capacity = capacity;
    this._cache = {};
    this._doubleLL = new DoubleLinkedList();
};

LRUCache.prototype.get = function(key) {
  let gettingNode = this._cache[key];
  if(gettingNode){
    this._doubleLL.removeNode(gettingNode);
    this._doubleLL.addNodeToTail(gettingNode);
    return gettingNode.value;
  }
  else{
    return -1;
  }
};

LRUCache.prototype.put = function(key, value) {
  if(this._doubleLL.size < this._capacity){
    if(this._cache[key]){
      let node = this._cache[key];
      node.value = value;
      this._cache[key] = node;
      this._doubleLL.removeNode(node);
      this._doubleLL.addNodeToTail(node);
    }
    else{
      let node = this._doubleLL.createNode(key,value);
      this._doubleLL.addNodeToTail(node);
      this._cache[key] = node;
    }
  }
  else{
    if(this._cache[key]){
      let node = this._cache[key];
      node.value = value;
      this._cache[key] = node;
      this._doubleLL.removeNode(node);
      this._doubleLL.addNodeToTail(node);
    }
    else{
      let deletingNode = this._doubleLL.removeNode(this._doubleLL.head);
      delete this._cache[deletingNode.key];
      let node = this._doubleLL.createNode(key,value);
      this._doubleLL.addNodeToTail(node);
      this._cache[key] = node;
    }
  }
};

let DoubleLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}
DoubleLinkedList.prototype.createNode = function(key=null, value, next = null, prev = null){
  return{
    key,
    value,
    next,
    prev,
  }
}
DoubleLinkedList.prototype.addNodeToHead = function(node){
  if(this.size === 0){
    this.head = node;
    this.tail = node;
    this.size++;
  }
  else if(this.size === 1){
    this.head = node;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size++;
  }
  else{
    this.head.prev = node;
    node.prev = null;
    node.next = this.head;
    this.head = node;
    this.size++;
  }
}
DoubleLinkedList.prototype.addNodeToTail = function(node){
  if(this.size === 0){
    this.head = node;
    this.tail = node;
    this.size++;
  }
  else if(this.size === 1){
    this.tail = node;
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.size++;
  }
  else{
    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    this.tail = node;
    this.size++;
  }
}
DoubleLinkedList.prototype.removeNode = function(node){
  let prev = node.prev;
  let next = node.next;
  if(prev && next){
    prev.next = next;
    next.prev = prev;
    this.size--;
    return node;
  }
  if(!prev && !next){
    this.head = null;
    this.tail = null;
    this.size--;
    return node;
  }
  if(prev === null){
    this.head = next;
    next.prev = prev;
  }
  if(next === null){
    this.tail = prev;
    prev.next = next;
  }
  this.size--;
  return node;
}