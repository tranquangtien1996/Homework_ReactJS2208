// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. 
// Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]

const checkNumber = (m, k) =>  {
    let min = [];
    min[0] = m[0];
    let flag = Math.abs(k - m[0]);

    for (let i = 1; i < m.length; i++) {
        if (Math.abs(m[i] - k) < flag) {
            min[0] = m[i];
            flag = Math.abs(m[i] - k);
        } 
        else if (Math.abs(m[i] - k) === flag) {
            min[1] = m[i];
        }
        else {
            break;
        }
    }
    return `Phần tử có khoảng cách gần nhất với ${k} là ${min}`
}

let a = [1, 2, 3, 4, 6, 7];
console.log(checkNumber(a, 8));