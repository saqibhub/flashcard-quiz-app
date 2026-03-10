let cards = [];
let current = 0;

fetch("flashcards.json")
.then(response => response.json())
.then(data => {
    cards = data;
    loadCard();
});

function loadCard(){
    document.getElementById("question").innerText = cards[current].question;
    document.getElementById("answer").innerText = "";
}

function showAnswer(){
    document.getElementById("answer").innerText = cards[current].answer;
}

function nextCard(){
    current++;
    if(current >= cards.length){
        current = 0;
    }
    loadCard();
}