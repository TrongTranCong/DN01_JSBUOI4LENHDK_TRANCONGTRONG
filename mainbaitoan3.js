/**
 * Demo confirm odd & even number
 * Block 1: Inputs
 * Numbers
 * Num1, Num2, Num3
 
 * Block 2: 
 * Step1: Declare variables and hold values from Form
 * 
 * Step2: 
 * Using the condition statements if else 
 * Step3: Display on UI
 * 
 * Block 3: Output
 * Answer odd number / even number ?
 */

var Num1ELE= document.getElementById("inputNum1");
var Num2ELE= document.getElementById("inputNum2");
var Num3ELE= document.getElementById("inputNum3");



document.getElementById("btnAnswer").onclick = function(){
var count = 0;
Num1 = parseInt(Num1ELE.value);
// console.log(Num1);
Num2 = parseInt(Num2ELE.value);
// console.log(Num2);
Num3 = parseInt(Num3ELE.value);
console.log(Num3);

if (Num1%2 == 0 ){
    // Tăng thêm 1
    Num1 += count; 
    count++;
    
    if (Num2%2 == 0){
        Num2 += count;
        count++;

    }else {
        3- count;
        } 
        if (Num3%2 == 0){
            Num3 += count;
            count++;
        }else{
        } 
    }else{
        3-count;
    }
    document.getElementById("txtResult").innerHTML = "Even number:" + " " + count ; 
    // document.getElementById("txtResult").innerHTML = "Odd number:" + " " + 3 - count;
} 

