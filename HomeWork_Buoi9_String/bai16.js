// 16. Viết chương trình lấy  id name của fb.
// VD:https://www.facebook.com/tung.nguyenthac.1/, output: “tung nguyenthac”

let a = "https://www.facebook.com/tung.nguyenthac.1/".split('/');
let b = a[a.length -2].split('.');
let c = b.slice(0, b.length - 1).join(' ');
console.log(c);

const getIDFacebook = input => {
    let a = input.split('/');
    let b = a[a.length - 2].split('.');
    let c = b.slice(0, b.length - 1).join(' ');
    return c;
}

console.log(getIDFacebook('https://www.facebook.com/tien.tranquang.547/'));