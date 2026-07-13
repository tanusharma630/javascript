
const prompt = require("prompt-sync")();
const randomNum = Math.floor(Math.random() * 100)+1;
let attempts = 0 ;
let keepPlaying = true;

console.log("*************************************")
console.log("Welcome to the Game")
console.log("*************************************")


while(keepPlaying){
    const userInput = prompt("Enter Your Num(1-100): ");
    if(userInput === null || userInput.trim().toLowerCase() === "q")
    {
        console.log("Game over, you decided wrong num")
        console.log("The correct num is:", randomNum)
        keepPlaying = false
        break;
    }

    let guess = Number(userInput)
    if(guess>100 || guess<1 || userInput.trim() === "" || isNaN(guess)){
        console.log("INVALID INPUT")
        continue;
    }

    attempts ++;

    if(guess === randomNum){
        console.log("Congratulations, You guess right num")
        console.log("Total Attempts:", attempts)
         keepPlaying = false
    }else if(guess > randomNum){
        console.log("Too High")
    }else{
        console.log("Too Low")
    }
}



