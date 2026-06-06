let input = document.querySelector("#inputbox")


function appendvalue(value){
input.value+=value
}

function calculate(){
  const result=eval(input.value)
  input.value=result

}

function Delete(){
  input.value=""
}

function onceRemove(){
  const result2 =input.value.slice(0,-1) 
  input.value=result2
}

function percentage(){
  const answer = (eval(input.value))/100
  input.value = answer
}




