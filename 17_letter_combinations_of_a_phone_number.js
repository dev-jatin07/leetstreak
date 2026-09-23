/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (digits.length === 0) {
        return [];
    }

    let map = new Map();

    map.set("2", "abc");
    map.set("3", "def");
    map.set("4", "ghi");
    map.set("5", "jkl");
    map.set("6", "mno");
    map.set("7", "pqrs");
    map.set("8", "tuv");
    map.set("9", "wxyz");

    let ans = [];
    let n = digits.length;

    function allcomb(s, n, idx, diary, ans) {

        // Base case
        if (idx === n) {
            ans.push(diary.join(""));
            return;
        }

        let choice = map.get(s[idx]);

        for (let i = 0; i < choice.length; i++) {

            // Choose
            diary.push(choice[i]);

            // Next digit
            allcomb(s, n, idx + 1, diary, ans);

            // Undo
            diary.pop();
        }
    }

    allcomb(digits, n, 0, [], ans);

    return ans;
};