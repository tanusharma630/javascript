const passwordField = document.getElementById("password")
const generateBtn = document.getElementById("Generator")
const copyBtn = document.getElementById("copyBtn")

const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")

const uppercase = document.getElementById("Uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

lengthSlider.addEventListener("input", ()=> {
    lengthValue.textContent = lengthSlider.value
})

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChar = "abcdefghijklmnopqrstuvwxyz"
const numberChar = "1234567890"
const symbolChar = "!@#$%^&*"

function generatePassword() {
    let chars = ""
    if(uppercase.checked)chars+=upperChars
    if(lowercase.checked)chars+=lowerChar
    if(numbers.checked)chars+=numberChar
    if(symbols.checked)chars+=symbolChar
    if(chars == ""){
        alert("Atleast select any one checkbox")
    }

    let password = ""
    for(let i=0;i<lengthSlider.value; i++){
       const randomIndex =  Math.floor(Math.random()* chars.length)
       password+=chars[randomIndex]
    }

    passwordField.value=password
}

generateBtn.addEventListener("click", generatePassword)

copyBtn.addEventListener("click",()=> {
    if(!passwordField.value)return
    navigator.clipboard.writeText(
        passwordField.value
    )
    copyBtn.textContent="copied!"

    setTimeout(() => {
       copyBtn.textContent="copy"
    }, 2000)
})
