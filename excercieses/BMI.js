function BMICalculator(weight,height) {
    var BMI = weight / (height * height);
    console.log(BMI);
    return BMI;
}

var bmi = BMICalculator(68,1.71);
console.log(bmi);