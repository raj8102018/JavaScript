let num1 = 8
let num2 = 2


// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    sum = num1+num2
    document.getElementById("sum-el").textContent=sum
}

function subtract() {
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    diff = num1-num2
    document.getElementById("sum-el").textContent=diff
}

function divide() {
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    div = num1/num2
    document.getElementById("sum-el").textContent=div
}

function multiply() {
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    prod = num1*num2
    document.getElementById("sum-el").textContent=prod
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


