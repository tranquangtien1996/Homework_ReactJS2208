// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương 
// của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]

const checkBP = m => {
    let b = m.map(item => Math.pow(item, 2));
    return b;
}

let a = [1,2,3,2,3,4,6,7];
console.log(checkBP(a));