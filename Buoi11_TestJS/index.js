// Làm module quản lý sinh viên của trường đại học. 
// Mỗi sinh viên có các thông tin sau: id, tên, tuổi, giới tính, điểm vào trường, điểm trung bình 
// yêu cầu:
// - Phần mềm hoạt động và thao tác dựa trên terminal: hiển thị thông tin, nhập thông tin …v..v (gợi ý: có thể sử dụng thư viện readline-sync)
// - Hiển thị menu các chức năng, khi thực hiện xong 1 chức năng tiếp tục hiển thị menu để người dùng tiện sử dụng
// - Dữ liệu lưu lại được để những lần sau tiếp tục sử dụng (gợi ý có thể lưu dữ liệu dưới dạng file txt => sử dụng thư viện fs có sẵn của nodejs) 
// - Phần mềm có các chức năng sau : 
// + Hiển thị tất cả học sinh 
// + Thêm mới học sinh 
// + Xoá 1 học sinh theo id
// +  Xoá nhiều học sinh theo id
// + Edit thông tin học sinh 
// + Tìm kiếm học sinh theo tên 
// + Tìm kiếm học sinh thủ khoa vào trường
// + Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4) 
// + Sắp xếp học sinh theo bảng chữ cái
// + Sắp xếp học sinh theo điểm trung bình tăng dần
// +  Sắp xếp học sinh theo tuổi tăng dần 
// +  Exit: thoát khỏi chương trình và không hiện menu nữa

// Hiển thị menu : Dùng vòng lặp while do 
// Điểm vào trường : entry point, Điểm trung bình: average point
// const id = Date.now();
// console.log(id);

let readlineSync = require('readline-sync');
const shortid = require("shortid");
let fs = require('fs');

const beginApp = () => {
    console.log('Student Managerment');
    console.log('-----------------------');
    console.log('1.Show all students');
    console.log('2.Add new student');
    console.log('3.Delete 1 student by id');
    console.log('4.Delete many students by id');
    console.log('5.Edit student infomation');
    console.log('6.Find student by name');
    console.log('7.Find student by top1 school entry point');
    console.log('8.Show list students be warned (Average point < 4)');
    console.log('9.Sort students by Alphabetically');
    console.log('10.Sort list students by Average point ascending');
    console.log('11.Sort students by age ascending');
    console.log('12.Exit');
}
beginApp();
let yourSelect = readlineSync.question('Please choose: ');

const getData = () => {
    let data = fs.readFileSync("./data.txt", "utf-8");
    if(data ==='') return []
    else return JSON.parse(data);  
};

let student = getData();

const saveData = () => {
    newStudent = JSON.stringify(student);
    fs.writeFileSync('./data.txt', newStudent, 'utf-8');
}

//2.Thêm mới học sinh
const addNewStudent = () => {
    console.log("Input new student infomation:");
    let id = shortid.generate();
    let name = readlineSync.question('Input name: ');
    let age = parseInt(readlineSync.question('Input age: '));
    let gender = readlineSync.question('Input gender: ');
    let entryPoint = parseInt(readlineSync.question('Input entry point: '));
    let averagePoint = parseInt(readlineSync.question('Input average point: '));
    student.push({
        id: id,
        name: name,
        age: age,
        sex: gender,
        entryPoint: entryPoint,
        averagePoint: averagePoint
    })
    saveData();
    yourSelect = 0;
}

//3.Xoá 1 học sinh theo id
const deleteStudent = () => {
    let deleteID = readlineSync.question('Input Id you want to delete:');
    student.map((item, index) => {
        if(item.id == deleteID){
            student.splice(index, 1);
        }
    });
    saveData();
    yourSelect = 0;
}

//4.Xoá nhiều học sinh theo id
const delStudents = () => {

}

//5.Edit thông tin học sinh
const editStudent = () => {
    let editID = readlineSync.question('Input Id you want to edit:');
    student.map((item, index) => {
        if(item.id == editID) {
            let newName = readlineSync.question('Input name: ');
            let newAge = parseInt(readlineSync.question('Input age: '));
            let newGender = readlineSync.question('Input gender: ');
            let newEntryPoint = parseInt(readlineSync.question('Input entry point: '));
            let newAvePoint = parseInt(readlineSync.question('Input average point: '));
            item.name = newName;
            item.age = newAge;
            item.sex = newGender;
            item.entryPoint = newEntryPoint;
            item.averagePoint = newAvePoint;
        }
    });
    saveData();
    yourSelect = 0;
}

//6.Tìm kiếm học sinh theo tên 
const findStudent = () => {
    let searchName = readlineSync.question('Input student name to find: ');
    let result = student.filter((item,index) => {
        if(item.name === searchName) return item;
    });
    console.log(result);
    yourSelect = 0;
}

//7. Tìm kiếm học sinh thủ khoa vào trường
const findMaxEntryPoint = () => {

}

//8.Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4)
const findStuWarned = () => {
    let lstStudent = student.filter((item) => {
        return item.averagePoint < 4;
    });
    console.log('List students be warned: ');
    console.log(lstStudent);
    yourSelect = 0;
}

//9. Sắp xếp học sinh theo bảng chữ cái
const sortByAlpha = () => {
    let lstStudent = student.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });
    console.log('Sort by Alphabetically: ');
    saveData();
    console.log(lstStudent);
    yourSelect = 0;
}

//10. Sắp xếp học sinh theo điểm trung bình tăng dần
const sortByPoint = () => {
    let lstStudent = student.sort((a,b) => {
        return a.averagePoint - b.averagePoint;
    });
    console.log('Sort by Average point ascending:');
    saveData();
    console.log(lstStudent);
    yourSelect = 0;
}

//11.Sắp xếp học sinh theo tuổi tăng dần 
const sortByAge = () => {
    let lstStudent = student.sort((a,b) => {
        return a.age - b.age;
    });
    console.log('Sort by Age:');
    saveData();
    console.log(lstStudent);
    yourSelect = 0;
}

while (true) {
    switch (parseInt(yourSelect)) {
        case 0:
            beginApp();
            yourSelect = readlineSync.question('Please choose: ');
            break;
        case 1:
            console.log(student);
            yourSelect = 0;
            break;
        case 2:
            addNewStudent();
            break;
        case 3:
            deleteStudent();
            break;
        // case 4:
        //     delStudents();
        //     break;
        case 5:
            editStudent();
            break;
        case 6:
            findStudent();
            break; 
        case 7:
            findMaxEntryPoint();
            break; 
        case 8:
            findStuWarned();
            break; 
        case 9:
            sortByAlpha();
            break; 
        case 10:
            sortByPoint();
            break; 
        case 11:
            sortByAge();
            break; 
        case 12:
            process.exit();
            break;          
        default:
            console.log('You must choose one of the menu!');
            yourSelect = 0;
    }
}