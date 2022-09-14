// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7

const isMax = s => {
    return Math.max(...s);
}
const isMin = s => {
    return Math.min(...s);
}
const isMax2 = s => {
    s.sort(function (a, b) {
        return a - b;
    });
}
const isMax3 = s => {
    let max = s[0];
    for (let i = 0; i < s.length; i++) {
        if (s[i] > max) {
            max = s[i];
        }
    }
    return max;
}

console.log(isMax2([5,9,-3,9,40]));