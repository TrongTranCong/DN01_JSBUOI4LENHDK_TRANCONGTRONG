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

var Num1ELE = document.getElementById("inputNum1");
var Num2ELE = document.getElementById("inputNum2");
var Num3ELE = document.getElementById("inputNum3");
document.getElementById("btnSort").onclick = function(){
Num1 = parseInt(Num1ELE.value);
console.log(Num1);
Num2 = parseInt(Num2ELE.value);
console.log(Num2);
Num3 = parseInt(Num3ELE.value);
console.log(Num3);

points = [Num1, Num2, Num3];
points.sort(function(a,b){return a-b});
document.getElementById("txtResult").innerHTML = points;  
}
