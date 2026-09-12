/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    let insert = false;
    if (intervals.length === 0){
        return [newInterval];
    }
    for (i = 0; i < intervals.length ;i++){
        let start1 = intervals[i][0];
        if (insert === false && start1 > newInterval[0]){
            res.push(newInterval);
            insert = true;
        } 
            res.push(intervals[i]);
        
    }
    // Agar newInterval sabse last mein aata hai
    if (insert === false) {
        res.push(newInterval);
    }
    let start1 = res[0][0];
    let end1 = res[0][1];
    let ans = [];
    for (let i = 1; i < res.length; i++){
        let start2 = res[i][0];
        let end2 = res[i][1];
        if (end1 >= start2){
            start1=start1;
            end1 = Math.max(end1,end2);
        } else {
            ans.push([start1,end1]);
            start1=start2;
            end1=end2;
        }
    }
    ans.push([start1,end1]);
    return ans;


};