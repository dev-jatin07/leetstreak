var summaryRanges = function(nums) {
    let res = [];
    let start = nums[0];

    for (let i = 0; i < nums.length - 1; i++) {
        let diff = nums[i + 1] - nums[i];

        if (diff === 1) {
            continue;
        }

        if (start === nums[i]) {
            res.push("" + start);
        } else {
            res.push(start + "->" + nums[i]);
        }

        start = nums[i + 1];
    }

    if (nums.length > 0) {
        if (start === nums[nums.length - 1]) {
            res.push("" + start);
        } else {
            res.push(start + "->" + nums[nums.length - 1]);
        }
    }

    return res;
};