// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? 
// (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

const checkSNT = m => {
    if (m <= 1) {
        return false;
    }
    for (let i = 2; i < m; i++) {
        if (m % i === 0) {
            return false;
        }        
    }
    return true;
}

const filterArray = array => {
    let b = array.filter(item => {
        if (checkSNT(item)) {
            return item;
        }
    })
    return b;
}
let a = [1,2,3,2,3,4,6,7];
console.log(filterArray(a));
