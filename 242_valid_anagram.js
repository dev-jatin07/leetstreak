/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    for(let i = 0; i < s.length ; i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        } else {
            map.set(s[i],1);
        }
    }
    for(let i =0; i<t.length;i++){
        let char = t[i];
        if(map.has(char)){
             map.set(char, map.get(char) - 1);
             if(map.get(char) === 0){
                map.delete(char);
             }
        }else{
            return false;
        }
    }
    if(map.size === 0){
        return true;
    }else{
        return false;
    }
};