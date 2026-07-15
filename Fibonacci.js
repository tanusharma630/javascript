const prompt = require("prompt-sync")();

const Terms = Number(prompt("Enter your terms : "))
let arr = [0,1]


if(Terms<0){
    console.log("Invalid Terms")
}

    for(let i=2; i<Terms; i++){
        arr[i] = arr[arr.length-1] + arr[arr.length-2]
    }
    console.log(arr);

    if(Terms<1){
        console.log(arr)
    }else if(Terms==1){
        console.log('['+arr[0]+']')
    }
