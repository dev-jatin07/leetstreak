var reverseString = function(s) {

    function reverse(low, high) {

        if (low >= high) {
            return;
        }

        // first aur last ko swap
        let temp = s[low];
        s[low] = s[high];
        s[high] = temp;

        reverse(low + 1, high - 1);
    }

    reverse(0, s.length - 1);
};