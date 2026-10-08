/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [];

    function backtrack(diary, start) {
        // Base case
        if (start === s.length) {
            res.push(diary.join(''));
            return;
        }

        // If character is a letter
        if (
            (s[start] >= 'a' && s[start] <= 'z') ||
            (s[start] >= 'A' && s[start] <= 'Z')
        ) {
            let ch = s[start].toLowerCase();

            // Lowercase choice
            diary.push(ch);
            backtrack(diary, start + 1);
            diary.pop();

            // Uppercase choice
            diary.push(ch.toUpperCase());
            backtrack(diary, start + 1);
            diary.pop();

        } else {
            // Number → only one choice
            diary.push(s[start]);
            backtrack(diary, start + 1);
            diary.pop();
        }
    }

    backtrack([], 0);

    return res;
};