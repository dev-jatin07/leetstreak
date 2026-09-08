/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    // sum = ab tak ka prefix sum
    let sum = 0;

    // res = kitne subarrays ka sum exactly k hai
    let res = 0;

    // Map mein:
    // key   = prefix sum
    // value = woh prefix sum kitni baar aaya
    let freqMap = new Map();

    // Array start hone se pehle prefix sum 0 hota hai
    // 0 ko 1 baar present maan rahe hain
    //
    // Isse woh subarray bhi count hoga
    // jo index 0 se start hota hai
    freqMap.set(0, 1);


    // Har element ko ek-ek karke process karenge
    for (let i = 0; i < nums.length; i++) {

        // Current element ko prefix sum mein add karo
        sum += nums[i];


        // Hume aisa previous prefix sum chahiye:
        //
        // currentSum - previousSum = k
        //
        // => previousSum = currentSum - k
        let ques = sum - k;


        // Check karo ki required previous sum
        // pehle kitni baar aaya hai
        //
        // Agar nahi aaya toh 0
        let freq = freqMap.get(ques) || 0;


        // Jitni baar required previous sum mila,
        // utne valid subarrays bane
        res += freq;


        // Current prefix sum ko Map mein store karo
        //
        // Kyuki future mein ye current sum
        // kisi future element ke liye "previous sum"
        // ban sakta hai
        //
        // Agar pehle se hai toh frequency + 1
        // warna 1
        freqMap.set(sum, (freqMap.get(sum) || 0) + 1);
    }


    // Total valid subarrays
    return res;
};