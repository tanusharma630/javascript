let globalVar = "I'm global!";
function myFunction(){
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}

myFunction();
console.log(globalVar);