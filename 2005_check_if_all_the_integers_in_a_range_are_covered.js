var isCovered = function(ranges, left, right) {
    for (let i = left; i <= right; i++) {
        let covered = false;

        for (let j = 0; j < ranges.length; j++) {
            let start = ranges[j][0];
            let end = ranges[j][1];

            if (start <= i && i <= end) {
                covered = true;
                break;
            }
        }

        if (covered === false) {
            return false;
        }
    }

    return true;
};