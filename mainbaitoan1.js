/**
 * Demo sort by order low - high
 * Block 1: Inputs
 * Num1, Num2, Num3
 
 * 
 * Block 2: 
 * B1: Declare variables and hold values from Form
 * 
 * B2: 
 * Using the function sorts values as the number 
 * B3: Display on UI
 * 
 * Khối 3: Output
 * Sort by Num1 < Num2 < Num3
 */

document.getElementById("btnSort").onclick = function(){

Num1 = parseInt(document.getElementById("inputNum1").value);
console.log(Num1);
Num2 = parseInt(document.getElementById("inputNum2").value);
console.log(Num2);
Num3 = parseInt(document.getElementById("inputNum3").value);
console.log(Num3);

number = [Num1, Num2, Num3];
number.sort(function(Num1,Num2){return Num1-Num2});
document.getElementById("txtResult").innerHTML = number;  
}
