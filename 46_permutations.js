var permute = function(nums) {
    let res = [];

    function cal(numbers, n, diary, idx, res) {

        if (idx === n) {
            res.push([...diary]);
            return;
        }

        for (let i = 0; i < n; i++) {

            if (!diary.includes(numbers[i])) {

                diary.push(numbers[i]);

                cal(numbers, n, diary, idx + 1, res);

                diary.pop();
            }
        }
    }

    cal(nums, nums.length, [], 0, res);

    return res;
};