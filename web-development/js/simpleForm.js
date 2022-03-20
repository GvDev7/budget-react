// Collect needed elements
const labels = document.querySelectorAll('.form-control label');


labels.forEach(label => {
    label.innerHTML = label.innerText    // Collect Text from labels
    .split('') //Create string into array
    .map((letter, idx) => `<span>${letter}</span>`) //Give each letter a span arround it 
    .join('')   //Back into a string
})
