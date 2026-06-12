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


let id = setInterval(() => {
    console.log("Running...");
}, 1000);

setTimeout(() => {
    clearInterval(id);
    console.log("Stopped");
}, 5000);