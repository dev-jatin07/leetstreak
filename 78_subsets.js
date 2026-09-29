var subsets = function(nums) {
    let res = [];

    function backtrack(start, diary) {
        res.push([...diary]);

        for (let i = start; i < nums.length; i++) {
            diary.push(nums[i]);

            backtrack(i + 1, diary);

            diary.pop();
        }
    }

    backtrack(0, []);

    return res;
};