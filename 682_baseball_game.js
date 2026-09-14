/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    let totalSum = 0;
    for(let i=0; i<operations.length; i++){
        if (operations[i] !== "C" && operations[i] !== "D" && operations[i] !== "+"){
            stack.push(Number(operations[i]));
        }else if(operations[i] === "C"){
            stack.pop();
        } else if(operations[i] === "D"){
            let doubleScore = stack[stack.length - 1] * 2;
            stack.push(doubleScore);
        }else if (operations[i] === "+"){
            let sum = stack[stack.length-1] + stack[stack.length -2];
            stack.push(sum);
        }
    }
    for (let i = 0; i < stack.length; i++) {
    totalSum += stack[i];
}
return totalSum;
};