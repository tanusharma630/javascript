// let globalVar = "I'm robot!"
//     function myFunction(){
//     let localVar = "I'm local!";
//     console.log(globalVar);
//     console.log(localVar);
// }

// myFunction();
// console.log(globalVar);

// if(true){
//     let y = "let";
//     const z = "const";
// }
// console.log(y);

// console.log(a);
// var a = "Hello";
// console.log(a)

// console.log(null == undefined)

// function fly(){
//     let plane = "Boeing 747"
//     console.log(plane)
// }
// fly()
// console.log(plane)


// function outer(){
//     let count = 0
//     function inner(){
//         count++
//         console.log(count)
//     }
//     return inner
// }

// let a = outer()
// a()
// a()

// let b = outer()
// b()
// b()

// function createPlayer(playerName){
//     let score = 0;

//     return function(){
//         score += 10;
//         return playerName + " has" + score + " points";
//     }
// }

// const player1 = createPlayer("Mario");
// const player2 = createPlayer("luigi");
// console.log(player1())
// console.log(player1())
// console.log(player2());


// function makeSubstractor(minusNum) {

//     return function(num){
//         return num - minusNum;
//     }
// }

// const number = makeSubstractor(5)
// console.log(number(20));

// function makeFileNamer(extension){
//     return function(string){
//          return string + extension;
//     }
// }

// const makeImage = makeFileNamer(".png")
// const makeSong = makeFileNamer(".mp3")

// console.log(makeImage("profile.pic"))
// console.log(makeSong("favorite-tune"))


// function makeRepeater(times){
//     return function(text){
//         return text.repeat(times);
//     }
// }

// const lines = makeRepeater(4)
// console.log(lines("tanu"))


// function makepasswordChecker(correctpassword){
//     return function(string){
//         return string === correctpassword
//     }
// }

// const attempt = makepasswordChecker("standing")
// console.log(attempt("wrongpass"))
// console.log(attempt("standing"))


// function makeCurrencyFormatter(symbol){
//     return function(number){
//         return symbol + number
//     }
// }

// const paisa = makeCurrencyFormatter("$")
// console.log(paisa(76)



// function createATM() {
//     let dailyLimit = 100

//     return function(amount){
//         if(amount <= dailyLimit){
//             dailyLimit -= amount;
//             return "success! Remaining daily limit: $" + dailyLimit;
//         }else {
//             return "Denied! You cannot exceed your daily limit";
//         }
//     }
// }

// const withdraw = createATM()
// console.log(withdraw(50))

// function makeCoffeeTracker(maxCups){
//     return function(numofCups){
//         let Remaining;
//         if (numofCups < maxCups){
//             return Remaining = maxCups - numofCups
//             return  Remaining;
//         }else if(numofCups > maxCups){
//            return "out of limit"
//         }else{
//             return maxCups
//         }
//     }
// }

// const limit = makeCoffeeTracker(10)
// console.log(limit(11));


// function makeTicketBooth(basePrice){
//     return function(weekend){
//         if(basePrice === weekend ){
//             return basePrice += 5
//         }else if(basePrice != weekend){
//             return basePrice;
//         }else{
//             return "inavlid days!"
//         }
//     }
// }

// const movieTickets = makeTicketBooth(12);
// console.log(movieTickets(1))