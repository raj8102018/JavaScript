const btn = document.getElementById('convert-btn');
const inp = document.getElementById("number");
const res = document.getElementById("output");

const romanNumerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
};

btn.addEventListener('click', () => {
    if (inp.value.length === 0) {
        res.innerText = "Please enter a valid number"
    } else if(inp.value < 0){
        res.innerText = "Please enter a number greater than or equal to 1"

    } else if(inp.value >= 4000){
        res.innerText = "Please enter a number less than or equal to 3999"
    } else if (inp.value > 0) { 
        let result = ''
        for (let key in romanNumerals) {
            while (inp.value >= romanNumerals[key]) {
                result += key;
                inp.value -= romanNumerals[key];
            }
        }

        res.innerText = result
    } else {
        res.innerText = "Please enter a valid number"
       
    }
});
