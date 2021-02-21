var bmi = bmiCalculator(65, 1.8);
alert(bmi);


function bmiCalculator(weight, height) {
    return weight / (height * height);
}