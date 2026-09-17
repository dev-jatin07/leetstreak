/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for(let i = 0 ; i<magazine.length;i++){
        let char = magazine[i];
       map.set(char, (map.get(char) || 0) + 1);
    }
    for(let i = 0; i<ransomNote.length ; i++){
        let char = ransomNote[i];

        if(!map.has(char)|| map.get(char) === 0){
            return false;
        }
        map.set(char, map.get(char) - 1);
    }
    return true;
};