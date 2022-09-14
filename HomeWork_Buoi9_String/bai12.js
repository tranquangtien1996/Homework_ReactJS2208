// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”

const deleteSpace = input => {
    return input.trim().split(' ').join('');
   
}
console.log(deleteSpace('	Hello world   '));

// let a = 'nguyeN THI tho tHu hA';
// let catchuoi = a.split(' ');
// let noichuoi = catchuoi.join('');
// console.log(noichuoi);