
let inc = 0

function increment() {
    inc+=1
    document.getElementById("count").innerText = inc
   
}
function store() {
    let countstr = inc + " - "
    document.getElementById("saveEl").textContent += countstr
    console.log(inc) 
    document.getElementById("count").innerText = 0
    inc = 0    
}