/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let zero = 0;
    let one = 0;
    let res = 0;

    let map = new Map();

    // Difference 0 initially index -1 par hai
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            zero++;
        } else {
            one++;
        }

        // Number of 1s - Number of 0s
        let diff = one - zero;

        // Same diff pehle mila tha
        if (map.has(diff)) {
            let idx = map.get(diff);

            // Current index - previous index
            let len = i - idx;

            res = Math.max(len, res);
        } else {
            // Pehli baar diff mila, earliest index store karo
            map.set(diff, i);
        }
    }

    return res;
};