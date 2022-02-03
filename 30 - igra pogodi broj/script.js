const attempts = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let toGuess = getRandomInt(1,20);

const input = document.querySelector(".guess")
let inputNum = input.valueAsNumber;

let playerWon = false;
const resetBtn = document.querySelector(".again");
const winQuery = document.querySelector(".check");
const winState = document.querySelector(".message");
/* console.log(winStateText); */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWin(input, question) {
    return (input == question) ? true : false;
}

function Winner(){
    winState.innerHTML = "🎉 Pobijedio si!"
    document.querySelector("main").style.backgroundColor = "green";
    document.body.style.backgroundColor = "green";
    highscore.innerHTML = attempts.innerHTML;
    document.querySelector(".number").innerHTML = toGuess;
}


// //////////////////////////////////////////////////////////

console.log(toGuess);

resetBtn.addEventListener("click",function(){
    toGuess = getRandomInt(1,20);
    console.log(`new value: ${toGuess}`);
    input.valueAsNumber = 0;
    winState.innerHTML = "Igra pogađanja"
    document.querySelector("main").style.backgroundColor = "#222";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".number").innerHTML = "?";
});

input.addEventListener("keyup",function(){
    inputNum = input.valueAsNumber;
})

//Check if you successfully guessed the number
winQuery.addEventListener("click", function(){
    if (inputNum == toGuess){
        Winner();
    }
    else{
        attempts.innerHTML--;
    }
});


