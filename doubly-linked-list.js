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

    if (this.head === null) {
      this.length++;
      // newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.length++;
    newNode.next = this.head;
    this.head = newNode;
    

  }

  addToTail(val) {
    // Your code here 
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
