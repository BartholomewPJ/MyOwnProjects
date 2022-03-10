/* This script adds ten divs with class name leaf that are arranged in a grid */
/* Each leaf is given a random color when the second button is clicked */
/* The body background is changed wen the first button is clicked */


var parallaxContainer = document.getElementById('parallaxContainer')

for (var i = 0; i < 10; i++) {
    var item = document.createElement('div');
    item.className = 'parallax-item';
    var leaf = document.createElement('div');
    leaf.className = 'leaf';

    item.appendChild(leaf);

    parallaxContainer.appendChild(item);

}


const colorBtn = document.getElementById('color-btn1');
const colorBtn2 = document.getElementById('color-btn2');

const setBG = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}


const items = document.querySelectorAll('.leaf');
const boxes = document.querySelectorAll('.parallax-item');
const setBG2 = () => {

    items.forEach(item => {

        let r2 = Math.floor(Math.random() * 256);
        let g2 = Math.floor(Math.random() * 256);
        let b2 = Math.floor(Math.random() * 256);

        item.style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    });

    boxes.forEach(box => {

        let r2 = Math.floor(Math.random() * 256);
        let g2 = Math.floor(Math.random() * 256);
        let b2 = Math.floor(Math.random() * 256);

        box.style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    });

}

colorBtn.addEventListener('click', setBG);
setBG();

colorBtn2.addEventListener('click', setBG2);
setBG2();