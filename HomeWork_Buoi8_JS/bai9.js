// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n = 1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’

// ĐN: số đối xứng là số đọc từ trái qua phải hay phải qua trái đều là giống nhau
// Tìm số đảo của số đã cho và xem nó có bằng nhau không? 

let n = 12321;
let m = n;
let daonguoc = 0;

while (m != 0) {
    daonguoc = daonguoc * 10 + m % 10;
    m = Math.floor(m / 10);
}
//tách số cuối ra + lấy số đảo nhân 10 => lại xóa số cuối
if(daonguoc === n) {
    console.log('YES');
} else {
    console.log('NO');
}