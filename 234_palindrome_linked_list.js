var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;

    // Find middle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Odd length → skip middle
    if (fast !== null) {
        slow = slow.next;
    }

    // Reverse second half
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // Compare both halves
    let first = head;
    let second = prev;

    while (second !== null) {
        if (first.val !== second.val) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
};