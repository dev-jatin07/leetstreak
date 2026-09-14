var makeGood = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];

        if (
            stack.length > 0 &&
            top.toLowerCase() === s[i].toLowerCase() &&
            top !== s[i]
        ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join("");
};