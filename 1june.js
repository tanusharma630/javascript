let globalVar = "I'm robot!"
    function myFunction(){
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}

myFunction();
console.log(globalVar);

if(true){
    let y = "let";
    const z = "const";
}
console.log(y);

console.log(a);
var a = "Hello";
console.log(a)

console.log(null == undefined)

function fly(){
    let plane = "Boeing 747"
    console.log(plane)
}
fly()
console.log(plane)


function outer(){
    let count = 0
    function inner(){
        count++
        console.log(count)
    }
    return inner
}

let a = outer()
a()
a()

let b = outer()
b()
b()

function createPlayer(playerName){
    let score = 0;

    return function(){
        score += 10;
        return playerName + " has" + score + " points";
    }
}

const player1 = createPlayer("Mario");
const player2 = createPlayer("luigi");
console.log(player1())
console.log(player1())
console.log(player2());