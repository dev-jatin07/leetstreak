var reverseList = function(head) {

    // Base case
    if (head === null || head.next === null) {
        return head;
    }

    // Pehle aage jao
    let newHead = reverseList(head.next);

    // Link reverse karo
    head.next.next = head;

    // Purana link tod do
    head.next = null;

    return newHead;
};