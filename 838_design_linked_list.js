var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let temp = this.head;
    let i = 0;
    while (temp!=null){
        if (i === index){
            return temp.val
        }
        temp = temp.next
        i++;
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);

    node.next = this.head;
this.head = node;

    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);

    if (this.head === null){
        this.head = node
    } else {
        let temp = this.head;
       while (temp.next !== null) {
    temp = temp.next;
}
        temp.next = node;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;

    let newNode = new ListNode(val);

    // Index 0 = add at head
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return;
    }

    let temp = this.head;
    let i = 0;

    // Previous node tak jao
    while (i < index - 1) {
        temp = temp.next;
        i++;
    }

    // Connections
    newNode.next = temp.next;
    temp.next = newNode;

    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    // Delete head
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let temp = this.head;
    let i = 0;

    // Previous node tak jao
    while (i < index - 1) {
        temp = temp.next;
        i++;
    }

    // Delete the next node
    temp.next = temp.next.next;

    this.size--;
};
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */