class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here 
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here 
    let newNode = new DoublyLinkedListNode(val);

    this.length++;

    if (this.head === null) {
      // newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.head.prev = newNode; // ensure the current head (to be next one, points to newNode as prev)
    newNode.next = this.head;
    this.head = newNode;
    // leave tail out of this as tail is being left intact

  }

  addToTail(val) {
    // Your code here 
    let newNode = new DoublyLinkedListNode(val);
    this.length++;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // can access the last node directly with this.tail
    this.tail.next = newNode; // set current tail next pointer to newNode
    newNode.prev = this.tail; // set newNode prev pointer to current tail
    this.tail = newNode; // set tail to newNode;
    
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
