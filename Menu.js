const prompt = require("prompt-sync")();
let arr = []

while(true){
    let choice = prompt("you have 4 numbers \n 1 for add \n 2 for view \n 3 for remove \n 4 for exit: \n Enter the number:")
     if(choice==1){
        let items = prompt("enter your item:")
        arr.push(items)
        console.log("added", arr)
    }else if(choice == 2){
        console.log("view", arr)
    }else if(choice == 3){
        arr.pop()
        console.log("remove", arr)
    }else if(choice == 4){
        console.log("Exit")
        break
    }else{
        console.log("Invalid Input")

    }

}