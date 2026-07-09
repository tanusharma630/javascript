const image = document.getElementById("user-image")
const name = document.getElementById("user-name")
const email = document.getElementById("user-email")
const button = document.getElementById("btn")
const number = document.getElementById("phone")
const country = document.getElementById("country")
const city = document.getElementById("city")

async function found(){
            const response = await fetch("https://randomuser.me/api/")
           const data = await response.json()
        const user = data.results[0]
        
        image.src = user.picture.large
        name.textContent ="Name: " +user.name.title +" " +user.name.first+" " +user.name.last
        phone.textContent = "Contact: " + user.phone 
        country.textContent = "Country: " + user.location.country
        city.textContent = "City: "+ user.location.city
        email.textContent = "Email: " + user.email
        }

        
        btn.addEventListener("click", found)
        found()