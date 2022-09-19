const bai2 = (n) => {
    for (let index = 1; index <= n; index+=2) {
        console.log(index);
    }
}

const bai4 = (n) => {
    for (let i = 2; i <= n ; i++) {
        let flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j ===0){
                flag = false;
                break;
            }
        }
        if(flag == true){
            console.log(i);
        }
    }
}

const bai6 = (n) => {
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        sum += Math.pow(index,2)
    }
    console.log(sum);
}

const bai7 = (n) => {
    // let n = 8;
    let sum = 0;
    for (let i = 1; i <= n; i+=2) {
        sum += i;
    }
    console.log(sum);
}

const bai8 = (n) => {
    let flag = true;

    do {
        if((n % 10) % 2 == 0){
            flag = false;
            break;
        }
    } while (n = Math.floor(n / 10));

    if(flag){
        console.log('YES');
    } else {
        console.log('NO');
    }
}

const bai9 = (n) => {
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
}

const bai10 = (n) => {
    for (let i = 2 ; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }   
}
// bai2(10);
// bai4(30);
// bai6(3);
// bai7(5);
// bai8(135);
// bai9(123212);
bai10();