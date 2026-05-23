
let userscore = 0;
let compscore = 0;

const container = document.querySelectorAll(".images");
const msg = document.querySelector("#msg");


const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
      const options = ["rock", "paper", "scissor"]
      const randomIdx = Math.floor(Math.random()*3);
      return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "game draw!";
}

const showWinner = (userWin) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green"; 
    }else{
        compscore++
        compscorepara.innerText = compscore;
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red"; 
    }
}
const playGame = (userchoice) => {
     const compchoice = gencompchoice();
     
     if(userchoice === compchoice){
        drawGame();
     }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false: true;
        }else{
            userWin = compchoice === "rock" ? false: true;
        }
        showWinner(userWin);
     }
}; 

container.forEach((images) => {
      images.addEventListener("click", () => {
      const userchoice = images.getAttribute("id");
      playGame(userchoice); 
    });
});