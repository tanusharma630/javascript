// async function Hello() {
//     console.log("start")

//     for(let i =0; i<3; i++){
//         console.log("loop number", i)
//     }

//     setTimeout(function(){
//         console.log("inside function")
//     },6000)
// }

// Hello()



// async function substractTimer() {
//     console.log("starting substraction")

//     setTimeout(function(){
//         let a = 2
//         let b = 5
//         console.log(a-b)
//     },2000)
// }

// substractTimer()


let count = 0;

setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
}, 1000);

