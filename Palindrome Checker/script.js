const btn = document.getElementById('check-btn');
const inp = document.getElementById("text-input");
const res = document.getElementById("result");

btn.addEventListener('click', () => {
    if (inp.value.length > 0) { 
        let torr = inp.value.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let rev = torr.split('');
        let perr = rev.reverse().join('');
        
        if (perr === torr || inp.value.length === 1) { // Compare reversed string with original string
            res.innerText = `${inp.value} is a palindrome`;
        } else {
            res.innerText = `${inp.value} is not a palindrome`;
        }
    } else {
        alert("Please input a value");
    }
});
