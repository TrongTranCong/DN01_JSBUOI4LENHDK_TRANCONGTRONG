/**
 * Demo "Hello" program
 * Block 1: Inputs
 * Members
 * Daddy (D)
 * Mommy (M)
 * Brother (B)
 * Youngersister (Y)
 
 * Block 2: 
 * Step1: Declare variables and hold values from Form
 * 
 * Step2: 
 * Using the function "switch case"
 * Step3: Display on UI
 * 
 * Block 3: Output
 * Answer appropriate with each member
 */



document.getElementById("btnAnswer").onclick = function(){
    var member = document.getElementById("selectMember").value;
    console.log(member);
    switch (member){
        case "1":
            member = "Daddy";
            break;
        case "2": 
            member = "Mommy";
            break;
        case "3":
            member = "Brother";
            break;
        case "4": 
            member = "Younger Sister";
            break;
    }      
    document.getElementById("txtResult").innerHTML =  "Hello "+ member + "!";
}
 