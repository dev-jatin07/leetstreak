var removeElements = function(head, val) {

    // Base case
    if (head === null) {
        return null;
    }

    // Pehle baaki linked list ko solve karo
    head.next = removeElements(head.next, val);

    // Agar current node ki value val hai
    if (head.val === val) {
        return head.next;
    }

    return head;
};