const background = document.getElementById('container');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click',() => {

function randomGradient() {
// Randomly choose gradient type //
const gradType = Math.floor(Math.random() * 3);
const gradChoices = ['linear-gradient', 'radial-gradient', 'conic-gradient'];
const gradientChoice = gradChoices[gradType];

// Randomly choose number of gradient colors //
const numberOfColors = Math.floor(Math.random() * 5) + 2;

const colors = [];
colors.length = numberOfColors;

// Create an empty array and assign its length to equal number of colors //
const percentages = [];
percentages.length=numberOfColors;

// Loop through the percentages array to fill it with random numbers between 0 and 1 /
for(let i = 0; i < percentages.length; ++i) {
    percentages[i]=Math.random();
}

// Calculate the total of the random numbers in the array //
const reducerFunction = function(accumulator,element) {
    const newTotal = accumulator + element;
    return newTotal;
}
const total = percentages.reduce(reducerFunction,0);

// Normalize by dividing each random number by the total //
// Result is the percentage each color will represent out of the full 100% //
const percentArray = percentages.map(element => (element /total) * 100);
// add 0 to the beginning of the percentArray //
percentArray.unshift(0);
//The percentArray is now ready //

//Create an array to hold the color and percentages combined//
const colorPercentArray = [];
colorPercentArray.length = numberOfColors;

// Fill the colors array with the random colors //
for(let i=0; i < numberOfColors; ++i) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    colors[i] = `rgb(${r},${g},${b})`
  
}

  //also fill the colorPercentArray //
  let sum = 0;
  for(let k=0; k < colorPercentArray.length; ++k) {
  let start = sum;
  let difference = percentArray[k+1];
  let end = start + difference;
  colorPercentArray[k] = colors[k]+" "+start+"% "+end+"%";
  sum = end;

  }


// Set the body background to the random gradient and color choices
//the line below works. I am commenting it out for other tests //

//document.body.style.background = `${gradientChoice}(${colors})` //

document.body.style.background = `${gradientChoice}(${colorPercentArray})`
const output=document.body.style.background

console.log("gradtype",gradType,"gradient choice",gradientChoice,"number of Colors", numberOfColors, "colors array",colors,"percentArray",percentArray,"colorPercentArray",colorPercentArray,output);
}
randomGradient();
});

btn2.addEventListener('click',() => {
function randomGradient2() {
    // Randomly choose gradient type //
    const gradType = Math.floor(Math.random() * 3);
    const gradChoices = ['linear-gradient', 'radial-gradient', 'conic-gradient'];
    const gradientChoice = gradChoices[gradType];
    
    // Randomly choose number of gradient colors //
    const numberOfColors = Math.floor(Math.random() * 5) + 2;
    
    const colors = [];
    colors.length = numberOfColors;
    
    // Fill the colors array with the random colors //
    for(let i=0; i < numberOfColors; ++i) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        colors[i] = `rgb(${r},${g},${b})`
      
    } 

    document.body.style.background = `${gradientChoice}(${colors})` 
 
    }
   randomGradient2();
    });
    
