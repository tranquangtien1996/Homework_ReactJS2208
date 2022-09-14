// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3

const countSpace = input => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if(input.charAt(i) === ' ') {
            sum += 1;
        }
    }
    return sum;
}

console.log(countSpace(' Hello    world '));