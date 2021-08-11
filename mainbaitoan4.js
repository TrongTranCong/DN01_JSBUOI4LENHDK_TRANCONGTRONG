/**
 * Demo what triangles
 * Block 1: Inputs
 * 
 * Edge1, Edge2, Edge3
 
 * Block 2: 
 * Step1: Declare variables and hold values from Form
 * 
 * Step2: 
 * Using the condition statements if else if
 * Step3: Display on UI
 * 
 * Block 3: Output
 * Answer isosceles triangle / right triangle/ equilateral triangle ?
 */



document.getElementById("btnAnswer").onclick = function(){
    Edge1 = document.getElementById("inputEdge1").value;
    Edge2 = document.getElementById("inputEdge2").value;
    Edge3 = document.getElementById("inputEdge3").value;
    if ((Edge1 == Edge2 && Edge1 != Edge3) || (Edge1 == Edge3 & Edge1 != Edge2) || (Edge2 == Edge3 && Edge2 != Edge1)){
        document.getElementById("txtResult").innerHTML = "Isosceles Triangle";
    }else if((Edge1 == Edge2) && (Edge2 == Edge3)){
        document.getElementById("txtResult").innerHTML = "Equilateral Triangle";
    }else if((Edge1 == Math.sqrt((Edge2*Edge2 + Edge3*Edge3)))||(Edge2 == Math.sqrt((Edge1*Edge1 + Edge3*Edge3)))||(Edge3 == Math.sqrt((Edge1*Edge1 + Edge2*Edge2)))){
        document.getElementById("txtResult").innerHTML = "Right Triangle";
    }else{
        document.getElementById("txtResult").innerHTML = "Another Triangle";
    }
} 

