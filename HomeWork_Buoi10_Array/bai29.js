// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của 
// học viên gồm 3 thông tin: id, firstName, lastName. Hãy sắp xếp danh sách học viên theo tên (firstName).
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
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
// Output: students = [
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]

students = [
        {
            id: "T3HXX1",
            firstName: "Ngan",
            lastName: "Duong Thuy"
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
    ]

const sortArray = array => {
    return array.sort((a, b) => {
        // if (a.firstName === b.firstName) {
        //     return 0;
        // } else if (a.firstName > b.firstName) {
        //     return 1;
        // } else {
        //     return -1;
        // }
        return a.firstName === b.firstName ? 0 : a.firstName > b.firstName ? 1 : -1;
    })
}

console.log(sortArray(students));