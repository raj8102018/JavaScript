// Storing data and elements
let myLogs = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-button");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-button");
const tabBtn = document.getElementById("tab-button");
//Obtaining logs from the local storage
//const logssFromLocalStorage = JSON.parse(localStorage.getItem("myLogs"));

//Preventing the logs from disappearing when the page is refreshed or when our browser is closed
/*if (logsFromLocalStorage) {
    myLeads = logsFromLocalStorage
    render(myLogs)
}*/

//Save tab
/*tabBtn.addEventListener("click", function() {
    //grabbing the url of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLogs.push(tabs[0].url)
        localStorage.setItem("myLogs", JSON.stringify(myLogs))
        render(myLogs);
    })
})
*/

function render(logs) {
    let listItems = "";
    for (let i = 0; i < logs.length; i++) {
    // using template strings
    listItems += `
        <li>
            <a target='_blank' href='${logs[i]}'>
                ${logs[i]}
            </a>
        </li>
    `
    }; 
    ulEl.innerHTML = listItems;
}

//Delete button to clear all
/*deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLogs = []
    render(myLogs);
})*/

//Pushing the values
inputBtn.addEventListener("click", function() {
    myLogs.push(inputEl.value);
    inputEl.value = "";
   // localStorage.setItem("myLeads", JSON.stringify(myLogs));
    render(myLogs);
})

//listItems += "<li> <a target='_blank' href='" + myLogs[i] + "'>" + myLogs[i] + "</a>"