// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// VD: n = 5, output: 9

let n = 8;
let sum = 0;

for (let i = 1; i <= n; i+=2) {
    sum += i;
}
console.log(sum);