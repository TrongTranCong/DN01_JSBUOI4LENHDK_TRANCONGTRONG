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

var memberELE= document.getElementById("inputMembers");
    console.log(memberELE);

document.getElementById("btnAnswer").onclick = function(){
    member = memberELE.value;
    switch (member){
        case "D":
            member = "Daddy";
            break;
        case "M": 
            member = "Mommy";
            break;
        case "B":
            member = "Brother";
            break;
        case "Y": 
            member = "Younger Sister";
            break;
        default:
            member = "Please input members family";
    }
    document.getElementById("txtResult").innerHTML = "Hello" + " " + member + "!"; 
}
 