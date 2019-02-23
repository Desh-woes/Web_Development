let iterator = 0;
let images = ['Assets/header.jpg', 'Assets/Image1.jfif', "Assets/Image2.jfif"];
let time = 3000;

function slide_show() {
    let element = document.querySelector(".banner_img img");
    element.src = images[iterator];

    if (iterator < images.length - 1){
        iterator++
    } else {
        iterator = 0
    }
}
window.onload = slide_show();