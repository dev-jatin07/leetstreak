/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let res = [];
    let start1 = intervals[0][0];
    let end1 = intervals[0][1];
    let count = 0;
    for (let i = 1; i<intervals.length;i++){
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];
        if(end1> start2){
            count++;
            start1=start1;
            end1=Math.min(end1,end2); //min hoga question m min h
        } else{
            res.push([start1,end1]);
            start1=start2;
            end1=end2;
        }
    }
    res.push([start1,end1]);
    return count;
    };