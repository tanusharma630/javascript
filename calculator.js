const prompt = require("prompt-sync")();
console.log("CALCULATOR")

let num1 = Number(prompt("Enter your num 1st: "))
let operator = prompt("choose your Operation")
let num2 = Number(prompt("Enter your num 2nd: "))

let result = 0

function Operation(){
    if(operator === "+"){
        console.log(result = num1 + num2)
    }else if(operator === "-"){
        console.log(result = num1- num2)
    }else if(operator === "*"){
        console.log(result = num1*num2)
    }else if (operator === "/"){
        console.log(result = num1 / num2)
    }else{
        console.log("Enter any valid operation")
    }
}

Operation()

