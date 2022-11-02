function sleep(milliseconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds);
}


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// export {sleep, getRandomInteger}; xuất hàm > dùng 'import {sleep, getRandomInteger} from "./xxx.js"' trong file js muốn gọi hàm


// hàm cơ bản
// let batDau = function () {
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     sleep(1000);
//     console.clear();
// }
// // batDau();

// let ketThuc = function () {
//     sleep(1000);
//     console.clear();
// }
// //ketThuc();

// function choiGame() {
//     batDau();
//     ketThuc();
// }
// choiGame();

// hàm mũi tên
// const hienSo = () => {
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
//     console.log(getRandomInteger(0,9));
// }
// // hienSo();

// const xoaSo = () => {
//     sleep(1000);
//     console.clear();
// }
// // xoaSo();

// const chayGame = () => {
//     hienSo();
//     xoaSo();
// }
// chayGame();

//
// Màn 01
let manMot = [
    getRandomInteger(0,9),
    getRandomInteger(0,9),
    getRandomInteger(0,9),
    getRandomInteger(0,9),
    getRandomInteger(0,9),
];

console.log(manMot);

// let soMot = document.getElementById('sothunhat');

// soMot.innerText = manMot[0];

// Hiển thị số
const hienSo = () => {   
    let nhaySo = document.getElementsByClassName('sohien');
    for (i = 0; i < manMot.length; i++) {
        nhaySo[i].innerHTML = manMot[i];
    };
    // Reset i để xóa số
    if (i > manMot.length) {
        i = 0
    }
    setTimeout(() => {
        for (i = 0; i < manMot.length; i++) {
                nhaySo[i].innerHTML = '';
        }
    }, 1000);
    return manMot;
}
// hienSo();

// Hiển thị lại số
let choiLai = document.getElementById('choilai');

choiLai.onclick = function() {
    hienSo();
    return manMot;
}


// Reset page
let reset = document.getElementById('reset')
reset.onclick = function() {
    location.reload();
};

//
let laySo = document.getElementById("so1");

//
let traLoi = document.getElementById('traloi');

traLoi.onclick = function() {
    // myFunction();
    if (laySo.value == manMot[0]) {
        console.log('dung');
    } else {
        console.log('sai');
    }
}