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

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    this.tail = current.next;
    
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
