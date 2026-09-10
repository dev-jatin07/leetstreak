/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let sum = 0;
    let res = 0;

    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];

        // Hume remainder chahiye, na ki true/false
        let ques = sum % k;

        // Negative remainder ko positive banane ke liye
        ques = (ques + k) % k;

        // Ye remainder pehle kitni baar aaya?
        let freq = map.get(ques) || 0;

        res += freq;

        // Current remainder ko future ke liye store karo
        map.set(ques, (map.get(ques) || 0) + 1);
    }

    return res;
};