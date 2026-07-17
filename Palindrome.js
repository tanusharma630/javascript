const prompt = require("prompt-sync")();
const userString = prompt("Enter Your String : ")
let str = '';


if(!userString){
    console.log("Invalid String")
}


for(let i=userString.length-1; i>=0; i--){
    str += userString[i]
}

if(userString===str){
    console.log("isPalindrom")
}else{
    console.log("isnotPalindrom")
}

