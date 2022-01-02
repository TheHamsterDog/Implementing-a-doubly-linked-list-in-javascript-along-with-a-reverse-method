
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: this.tail
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
      previous: null
    }
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    holdingPointer.previous = newNode;
    newNode.previous = leader;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    console.log(this.printList())
    let newHead = {}
    let newTail = {}
    let currentNode = {}
    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        newHead = this.tail;
        newHead.next = this.tail.previous;
        newHead.previous = null;
        currentNode = newHead.next;
        continue;
      }
      if (i === (this.length - 1)) {
        newTail = this.head;
        newTail.next = newTail.previous;
        newTail.previous = null;
        continue;
      }
      let next = currentNode.previous;
      let previous = currentNode.next;
      currentNode.previous = previous;
      currentNode.next = next;
      currentNode = next;
    }
    this.head = newHead;
    this.tail = newTail;
    //Code Here
    return this.printList();
  }
  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    unwantedNode.next.previous = leader;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(69);
myLinkedList.append(420);
myLinkedList.prepend(100)
myLinkedList.insert(3, 200);
myLinkedList.insert(100, 120);
myLinkedList.remove(2);
myLinkedList.reverse()

