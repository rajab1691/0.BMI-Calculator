
let weight,height,error,measure,bmi;
error="Please Enter values as expected, check whether weight and height is greater than 0";

function calculate(){

    weight=document.getElementById('weight').value;
    height=document.getElementById('height').value
    height/=100;
    height*=height;
    bmi=(weight)/height;
    bmi=bmi.toFixed(1);

    if(bmi<=18.4){
        measure="Your BMI is "+bmi+" which means "+"you are underweight";
    }else if(bmi>=18.5 && bmi<=24.9){
        measure="Your BMI is "+bmi+" which means "+"you are normal";
    }else if(bmi>=25 && bmi<=29.9){
        measure="Your BMI is "+bmi+" which means "+"you are overweight";
    }else if(bmi>=30){
        measure="Your BMI is "+bmi+" which means "+"you are obese";
    }

    if(weight==0){
        document.getElementById('result').innerHTML=error;
    }else if(height==0){
        document.getElementById('result').innerHTML=error;
    }else{
        document.getElementById('result').innerHTML=measure;
    }

    if(weight<0){
        document.getElementById('result').innerHTML="Negative value of weight Please Fix it.";
    }
}