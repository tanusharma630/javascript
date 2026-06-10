

let array = ["https://picsum.photos/id/1012/600/400" ,
    "https://picsum.photos/id/1017/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1019/600/400"];


   const colors = [
       "yellow",
        "skyblue",
        "orange",
        "purple"
   ]
   
    function change() {
        box.src = array[Activeidx];
        document.body.style.backgroundColor = colors[Activeidx]
    } 
    
const box = document.querySelector(".image");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let Activeidx = 0;
  next.addEventListener("click", () => {
    Activeidx++;
    
    if(Activeidx >= array.length){
        Activeidx = 0;
    }
    change();

    box.src = array[Activeidx];
})

prev.addEventListener("click" , ()=>{
    Activeidx--;

    if(Activeidx < 0){
        Activeidx = array.length-1;
    }
    change();
    box.src = array[Activeidx];
})


