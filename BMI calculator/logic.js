
const result = document.getElementById('result');

function BMICalculator(){
    const Weightinp = document.getElementById('weight').value;
    const Heightinp = document.getElementById('height').value;
    const weight = parseFloat(Weightinp);
    const height = parseFloat(Heightinp)/100;
    let BMI = weight/(height*height);

    let category = ''
    if(BMI < 18.5){
        category = "underweight"
    }else if(BMI <= 25.9 && BMI > 29.9){
        category = "Normal"
    }else if(BMI <= 29.9 && BMI > 34.9){
        category = "Overweight"
    }else{
        category = "Obecity"
    }

    result.textContent = `Your BMI is ${BMI.toFixed(2)} (${category})`
    console.log(result.textContent)
}