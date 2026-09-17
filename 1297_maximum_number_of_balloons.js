/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map();

    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1);
        } else {
            map.set(text[i], 1);
        }
    }

    let b = map.get("b") || 0;
    let a = map.get("a") || 0;
    let l = Math.floor((map.get("l") || 0) / 2);
    let o = Math.floor((map.get("o") || 0) / 2);
    let n = map.get("n") || 0;

    return Math.min(b, a, l, o, n);
};