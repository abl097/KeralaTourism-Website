//------login form--------//

let email = document.getElementById("email");
let passw = document.getElementById("password")
let error = document.getElementById("error");
let pasError = document.getElementById("passError")
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let Pregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

// ------email and password validation--------//

function validate() {   
    if(email.value==""){
        error.innerHTML = "Enter Email";
        error.style.color = "red";
        return false;
    }
    else if(passw.value.trim()==""){
        pasError.innerHTML = "Enter password";
        pasError.style.color = "red";
        return false;
    }
    else if(regex.test(email.value)===false){
        error.innerHTML = "Enter a valid Email";
        error.style.color = "red";
        return false;
    }
    else if(passw.value.length<8){
        pasError.innerHTML = "Password is too short";
        passError.style.color = "red";
        return false;
    }
    else if(Pregex.test(passw.value)===false){
        pasError.innerHTML = "Enter a valid Password";
        pasError.style.color = "red";
        return false;
    }
    else{
        error.innerHTML = "Valid";
        error.style.color = "green";
        pasError.innerHTML = "Valid";
        passError.style.color = "green";
        return true;
    }
    
}

// ------------signup form--------------//

let name = document.getElementById("name");
let phn = document.getElementById("phn");
let pass = document.getElementById("password");
let cpass = document.getElementById("confirm-password"); 
let lname = document.getElementById("Nerror");
let lmail = document.getElementById("Eerror");
let lphn = document.getElementById("PHerror");
let lpass = document.getElementById("Perror");
let lcpass = document.getElementById("CPerror");

//------------------- regex for validation-------------------//

let Nregex = /^([a-zA-Z]+)$/
let Phregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let PM_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,50}$/;

// -------------function--------------//

function validate2(){

    if(Nregex.test(name.value)===false){
        lname.innerHTML = "Enter a valid name";
        lname.style.color = "red";
        return false;
    }
    // -------email validation------//

    else if(regex.test(email.value)===false){
        lmail.innerHTML = "*Enter a valid email";
        lmail.style.color = "red";
        return false;
    }
    // --------phone number validation-------//

    else if(Phregex.test(phn.value)===false){ 
        lphn.innerHTML = "Enter a valid Phone number";
        lphn.style.color = "red";
        return false;
    }
    // --------password validation-------//

    else if(Pregex.test(pass.value)===false){
        lpass.innerHTML = "Enter a valid Password";
        lpass.style.color = "red";
        return false;
    }
    // ---------password conformation--------//

    else if(cpass.value!=pass.value){
        lcpass.innerHTML = "Password does not match";
        lcpass.style.color = "red";
        return false;
    }
    else{
        return true;
    }
}
    
// ----------password strength indicator----------//

function pass_strength(){
    if(PM_regex.test(pass.value)===false){
        lpass.innerHTML = "weak";
        lpass.style.color = "red";
        return
    }
    else if(pass.value.length<8){
        lpass.innerHTML = "medium";
        lpass.style.color = "orange";
        return
    }
    else {
        lpass.innerHTML = "Good";
        lpass.style.color = "green";
        return true;
    }
}

