var isPalindrome = function(s) {

    // Sirf letters aur numbers rakho
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    function check(low, high) {

        let len = high - low + 1;

        // Base case
        if (len === 0 || len === 1) {
            return true;
        }

        // Match nahi hua
        if (s[low] !== s[high]) {
            return false;
        }

        // Andar jao
        return check(low + 1, high - 1);
    }

    return check(0, s.length - 1);
};