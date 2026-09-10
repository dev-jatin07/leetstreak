/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let leftSum = new Array(gain.length + 1);
    leftSum[0] = 0;
    let high =0;
    for (i = 1; i <=gain.length; i++){
         leftSum[i] = leftSum[i-1] + gain[i-1];
         high = Math.max(high,leftSum[i]);
    }
    return high;
};