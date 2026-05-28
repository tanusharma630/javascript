let inputBox = document.querySelector("#inputbox");
let buttons = document.querySelectorAll(".btn");

let string = "";
buttons.forEach(button => {
      button.addEventListener("click", (e) => {
       let value = e.target.innerText;
       if(value === "AC"){
         string = "";
         inputBox.value = string;
       }

       else if(value === "="){
         string = eval(string);
         inputBox.value = string;
       }

       else if(value === "DEC"){
         string = string.slice(0, -1);
         inputBox.value = string;
       }

       else{
         string += value;
         inputBox.value = string;
       }
      });
});


