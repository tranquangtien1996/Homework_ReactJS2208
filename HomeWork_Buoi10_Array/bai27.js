// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên 
// gồm 3 thông tin: id, firstName, lastName. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên 
// của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: [ {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "DuOng Thuy"
//     }]
students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "DUOng Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ];

const checkName = name => {
    if (name.toLowerCase().indexOf('a') !== -1 && name.length >= 3) {
        return true;
    } 
}

const getNewName = s => {
    let a = s.trim().toLowerCase().split(' ');
    let b = a.map((c) => {
        return c.replace(c.charAt(0), c.charAt(0).toUpperCase());
    });
    return b.join(' ');
}

students.map (item => {
    item.firstName = getNewName(item.firstName);
    item.lastName = getNewName(item.lastName);
    if (checkName(item.firstName)) {
        console.log(item);
    }
})