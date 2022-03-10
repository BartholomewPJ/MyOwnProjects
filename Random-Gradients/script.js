const background = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {

function randomGradient() {
// Randomly choose gradient type //
let gradtype = Math.floor(Math.random() * 3);
let gradchoices = ['linear-gradient', 'radial-gradient', 'conic-gradient'];
let gradientChoice = gradchoices[gradtype];

// temporary example //
let test='red,green,blue';

// Randomly choose number of gradient colors //
let numberOfColors = Math.floor(Math.random() * 5) + 2;

let colors = [];
colors.length = numberOfColors;
// Fill the colors array with the random colors //
for(let i=0; i < numberOfColors; ++i) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors[i] = `rgb(${r},${g},${b})`
}

// Set the body background to the random gradient and color choices
document.body.style.background = `${gradientChoice}(${colors})`


console.log("gradtype",gradtype,"gradient choice",gradientChoice,"number of Colors", numberOfColors, "colors array",colors);
}
randomGradient();
});

// btn.addEventListener('click',() => {

// // background.setAttribute('style','background:`${choice}(red,green,blue)`')

// background.style.background = `${gradientChoice}(${test})`

// document.body.style.background = makeRandColor();
// }
// )