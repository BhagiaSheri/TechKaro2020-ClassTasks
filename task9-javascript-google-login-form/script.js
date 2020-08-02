// scripting for validation of email address
function validateEmail() {
    let email = "bhagiasheri@gmail.com";
    let email_field = document.querySelector("input").value;
    console.log(email_field);
    if (email_field == email && email_field != "") {
        document.getElementsByClassName("inputs-validate")[0].style.border = "2px solid #1a73e8";
        document.getElementsByClassName("labels-floating")[0].style.color = "#1a73e8";
        document.getElementsByClassName("error")[0].style.display = "none";
        document.getElementById("error-icon").style.display = "none";
        return true;
    }
    else {
        if (email_field != "") {
            document.getElementsByClassName("error")[0].innerHTML = " Couldn't find your Google Account";
        }
        else {
            document.getElementsByClassName("error")[0].innerHTML = " Enter an email or phone number";
        }
        document.getElementsByClassName("inputs-validate")[0].style.border = "2px solid #d93025";
        document.getElementsByClassName("labels-floating")[0].style.color = "#d93025";
        document.getElementsByClassName("error")[0].style.display = "inline";
        document.getElementById("error-icon").style.display = "inline";
        return false;
    }
}

// scripting for validation of passward
function validatePassward() {
    let passward = "TechKaro20";
    let pass_field = document.querySelector("input").value;
    console.log(pass_field);
    if (pass_field == passward && email_field != "") {
        document.getElementsByClassName("inputs-validate")[0].style.border = "2px solid #1a73e8";
        document.getElementsByClassName("labels-floating")[0].style.color = "#1a73e8";
        document.getElementsByClassName("error")[0].style.display = "none";
        document.getElementById("error-icon").style.display = "none";
        return true;
    }
    else {
        if (pass_field == "") {
            document.getElementsByClassName("error")[0].innerHTML = " Enter a password";
        }
        else {
            document.getElementsByClassName("error")[0].innerHTML = " Wrong password. Try again or click Forgot password to reset it.";
        }
        document.getElementsByClassName("inputs-validate")[0].style.border = "2px solid #d93025";
        document.getElementsByClassName("labels-floating")[0].style.color = "#d93025";
        document.getElementsByClassName("error")[0].style.display = "inline";
        document.getElementById("error-icon").style.display = "inline";
        return false;
    }
}