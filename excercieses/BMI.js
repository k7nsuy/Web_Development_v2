function checkBMI(weight,height) {
    var BMI = weight / Math.pow(height,2);
    var BMI2 = Math.floor(BMI);

    if( BMI2 < 18.5) {
        alert("Your BMI is " + BMI2 + ", so you are underweight.")
    } else if ( BMI2 >= 18.5 && BMI2 <= 24.9) {
        alert("Your BMI is " + BMI2 + ", so you have a normal weight.")
    } else {
        alert("Your BMI is " + BMI2 + ", so you are overweight.")
    }
}

checkBMI(prompt("what is you weight?"),prompt("what is your height?"));