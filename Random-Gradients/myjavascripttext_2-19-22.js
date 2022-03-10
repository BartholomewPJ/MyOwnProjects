function colorPercents() {
// Generage a random number between 2 and 6 to represent number of colors in the gradient //
const numberOfColors = Math.floor(Math.random() * 5) + 2;

// Create an empty array and assign its length to equal the previously generated random number //
const percentages = [];
percentages.length=numberOfColors;

// Loop through the array to fill it with random numbers between 0 and 1 /
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
// return percentArray;
percentArray.unshift(0);
console.log(percentArray);
}

// Random numbers between 0 and 1 to choose if gradients use color stops or are repeating //
const colorstops = Math.floor(Math.random() *2);
const repeating = Math.floor(Math.random() *2);

// Random number to decide the type of gradient //
const gradtype = Math.floor(Math.random() * 3);
const gradchoices = ['linear-gradient', 'radial-gradient', 'conic-gradient'];
const gradientChoice = gradchoices[gradtype];
