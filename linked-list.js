/** Node: node for a singly linked list. */
//I used the solution for the majority of this assignment. I can't seem to figure out moving things in the middle or removing things.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  //used solution for help

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count !== idx) {
      cur = cur.next;
      count += 1; 

    } 

    return cur;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } 

    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  //used solution

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }

    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1)

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      return "This is an invalid idx"

    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      return "This is an invalid idx";
    }

    let cur = this._get(idx);
    cur.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */
  //used solution
  insertAt(idx, val) {
     if (idx === 0) {
      this.unshift(val);
    }

    if (idx === this.length) {
      this.push(val)
    }

    let prev = this._get(idx - 1);

    if (!prev) {
      let newNode = new Node(val)
      this.head = newNode; 
      this.length = 1; 
    } else {
      let newNode = new Node(val)

    
      newNode.next = prev.next;
      prev.next = newNode;
      this.length += 1;
    }

     
  }

  /** removeAt(idx): return & remove item at idx, */

  //used solution
  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      return "This is not a valid idx";
    }

    if (idx === 0) {
      let val = this.head.val
      this.head = this.head.next; 
      this.length -= 1; 
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

   let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
 
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let total = 0; 
    let cur = this.head;
    while (cur !== null) {
      total += cur.val;
      cur = cur.next; 
    }
    return total/this.length;
  }
}

module.exports = LinkedList;
