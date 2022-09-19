// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object 
// của học viên gồm 3 thông tin: id, firstName, lastName, và age. 
// Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
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
// Output: [{
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//  }]

students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
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
    ];

const checkName = (a, b) => {
    // if ( a.toLowerCase().indexOf(b.toLowerCase() + " ") === 0) {
    //     return true;
    // }
    if (a.slice(0,2) === b) {
        return true;
    }
}

students.map(item => {
    if (checkName(item.lastName, 'Do')) {
        console.log(item);
    }
})