function sleep(milliseconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds);
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//
function taoSoBiMat() {
    let soBiMat = [];
    for (let i = 1; i <= 5; i++) {
        let x = getRandomInteger(0, 9);
        soBiMat.push(x);
    }
    return soBiMat;
}
// Trả về mảng lưu các số do người dùng nhập
function laySoNguoiDung() {
    let soNguoiDung = [];

    // for

    return soNguoiDung;
}

laySoNguoiDung();

function kiemTra(soBiMat, soNguoiDung) {

}
function main() {
    // Tạo 5 số ngẫu nhiên và lưu vào mảng
    let soBiMat = taoSoBiMat();
    console.log(soBiMat);


    // Hiển thị 5 con số ngẫu nhiên
    console.log(soBiMat);

    // Sau 1 giây thì xóa 5 số đó đi
    // sleep(1000);
    // console.clear();

    // Cho nguoi dung nhập
    let soNguoiDung = laySoNguoiDung();


    // Xét đúng sai
    if (kiemTra(soBiMat, soNguoiDung) == true)
        console.log("Ban da doan dung");
    else
        console.log("Game over");
}

main();