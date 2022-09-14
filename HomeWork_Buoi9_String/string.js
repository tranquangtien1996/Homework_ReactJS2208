// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3
// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”
// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”
// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2
// 16. Viết chương trình lấy  id name của fb.
// VD:https://www.facebook.com/tung.nguyenthac.1/, output: “tung nguyenthac”

const countSpace = input => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if(input.charAt(i) === ' ') {
            sum += 1;
        }
    }
    return sum;
}

const deleteSpace = input => {
    return input.split(' ').join('');
    // let a = 'nguyeN THI tho tHu hA';
    // let catchuoi = a.split(' ');
    // let noichuoi = catchuoi.join('');
    // console.log(noichuoi);
}

const reverseString = (input) => {
    let newstring = input.split('').reverse().join('');
    return newstring;
}

const indexOfString = (s1,s2) => {
    return s1.indexOf(s2);
}
// console.log(countSpace(' Hello    world '));
// console.log(deleteSpace('	Hello world   '));
// console.log(reverseString('This is a beautiful day'));
console.log(indexOfString("This is a beautiful day","a"));
