var isIsomorphic = function(s, t) {
    let map = new Map();
    let map2 = new Map();

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
            return false;
        }

        if (map2.has(t[i]) && map2.get(t[i]) !== s[i]) {
            return false;
        }

        map.set(s[i], t[i]);
        map2.set(t[i], s[i]);
    }

    return true;
};