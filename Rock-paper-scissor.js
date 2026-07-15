const prompt = require("prompt-sync")();

const randomIndex = Math.floor(Math.random()*3)

const turns = ["rock", "paper", "scissor"]
const userChoice = prompt("enter your rock , paper, scissor:  ").toLowerCase();
const computerChoice = turns[randomIndex]

if(!turns.includes(userChoice)){
    console.log("Invalid Choice")
}

if(userChoice === computerChoice){
    console.log("Draw")
}else if(
    userChoice==="rock" && computerChoice === "scissor"||
    userChoice=== "paper" && computerChoice === "rock" ||
    userChoice=== "scissor" && computerChoice === "paper"
){
    console.log("You Win!!")
}else{
    console.log("Computer Win")
}