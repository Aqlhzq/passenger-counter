
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")

let count = 0;

function increment(){
    count += 1
    countEl.textContent = count;
    console.log(count);
}

function reset(){
    countEl.textContent = 0;
    count = 0;
}


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
}





