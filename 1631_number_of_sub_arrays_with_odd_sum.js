/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let prefix = new Array(arr.length + 1);
    prefix[0] = 0;

    for (let i = 1; i <= arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i - 1];
    }

    let odd = 0;
    let even = 1;
    let ans = 0;
    let mod = 1000000007;

    for (let i = 1; i < prefix.length; i++) {
        if (prefix[i] % 2 === 1) {
            ans += even;
            odd++;
        } else {
            ans += odd;
            even++;
        }

        ans %= mod;
    }

    return ans;
};