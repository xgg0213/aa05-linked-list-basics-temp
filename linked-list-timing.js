const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here 
// this is only one way of checking code efficiency
let n = 10000
let ll = new LinkedList();
let dl = new DoublyLinkedList();

// for addToHead: dl doubles the time of ll
// ll.addToHead is O(1) making this loop O(n)
// question: 
// 1. is the doubling time due to the fact that DL also needs to consider this.tail? Yes
// 2. why is there minor time differences each run? Due to mechanical reasons
console.time("LL: addToHead")
for (let i = 0 ; i < n ; i++) {
  ll.addToHead(i);
}
console.timeEnd("LL: addToHead") // result is 0.899ms

// dl.addToHead is O(1)
console.time("DL: addToHead")
for (let i = 0 ; i < n ; i++) {
  dl.addToHead(i);
}
console.timeEnd("DL: addToHead") // result is 1.938ms

// for addToTail: dl < 1% of ll
// ll.addToTail is O(n) 
// dl.addToHead is O(1)
// question:
// 1. is the time difference due to the fact that dl can access the tail pointer directly while ll has to loop through everything? Yes
console.time("LL: addToTail")
for (let i = 0 ; i < n ; i++) {
  ll.addToTail(i);
}
console.timeEnd("LL: addToTail") // result is 227.087ms

// dl.addToHead is O(1) 
console.time("DL: addToTail")
for (let i = 0 ; i < n ; i++) {
  dl.addToTail(i);
}
console.timeEnd("DL: addToTail") // result is 1.29ms

