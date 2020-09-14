let message = document.querySelector(".message"),
    btn = document.querySelector("button");

async function getData(){
    const response = await fetch("https://api.kanye.rest?format=text");
    
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    } else {
        const quoteData = (await response.text());
        console.log(quoteData);
        message.innerHTML = quoteData
    }
    
}

function print(){
    let data = "A Winner never quits and a quitter never wins"
    message.innerHTML = data;
}

btn.addEventListener("click", getData);


// APIS 
// https://quotes.rest/qod/categories