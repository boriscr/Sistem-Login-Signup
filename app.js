let userReg = "boris"; //test user
let passwordEnteredReg = 123; //test password


var loginSes = true;
var signUpSes = false;
//Selected Inputs and Button
const email = document.getElementById("emailInput"); //email
const passwordEntered = document.getElementById("passwordEntered");//Password 1
const sendBtn = document.getElementById("sendBtn");  //Button Send
//Buttons login and signUp on start
const btnlogin = document.getElementById("loginBtnBoxIcon");
btnlogin.style.display = "none";//Btn loguin
const btnSignUp = document.getElementById("aggBox");
btnSignUp.style.display = "flex";//Btn Sing up

//*********Error message when no data has been entered***********/
//Function for errors messaje
function errorsMessagesForInputs(element, inputElement, messageText) {
    inputElement.addEventListener("input", function () {
        const errorMessageElement = document.getElementById(element);
        if (inputElement.value == "") {
            errorMessageElement.textContent = messageText;
            errorMessageElement.className = "errorMessage"
        } else {
            errorMessageElement.innerHTML = "";
        }
    })
}

//Email not entered
errorsMessagesForInputs("emailError", email, "Email not entered.")

//password not entered
errorsMessagesForInputs("keyError", passwordEntered, "Password not entered.")

//*******************************************************************/

//Btn Send
sendBtn.addEventListener("click", function () {
    if (email.value == userReg && passwordEntered.value == passwordEnteredReg && loginSes == true) {
        console.log("yes")
    }
    else {
        console.log("No")
    }
});

///////////////////////////////////////////////////////////

//Btn eyesOpen-No eyesOpen passwordEntered
//eyesOpen - do not eyesOpen password
const eyesOpen = document.getElementById("eyesOpen");
const eyesCloced = document.getElementById("eyesCloced");
eyesCloced.style.display = "none";

function eyesOpenPasswordEntered(name, eyesOpenIcon, eyesClocedIcon) {
    eyesOpenIcon.style.display = "none";
    eyesClocedIcon.style.display = "flex";
    const inputPasswordEntered1 = document.getElementById(name).type = "text";
}
function eyesClocedPasswordEntered(name, eyesOpenIcon, eyesClocedIcon) {
    eyesOpenIcon.style.display = "flex";
    eyesClocedIcon.style.display = "none";
    const inputPasswordEntered1 = document.getElementById(name).type = "password";
}
//Input password enter 1 loguin
//icon eyes open 
eyesOpen.addEventListener("click", function () {
    eyesOpenPasswordEntered("passwordEntered", eyesOpen, eyesCloced)
})
//icon eyes cloced
eyesCloced.addEventListener("click", function () {
    eyesClocedPasswordEntered("passwordEntered", eyesOpen, eyesCloced)
})

////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
//Btn signUpTitle
const aggBox = document.getElementById("aggBox");
aggBox.addEventListener("click", function () {
    signUpSes = true;
    loginSes = false;
    //Border Box Sesion
    const boxSesion = document.getElementById("boxSesion");
    boxSesion.style.border = "3px solid #07212779";

    //Title signUp
    const signUpTitleBox = document.getElementById("title");
    const signUpTitleElement = document.createElement("h2");
    signUpTitleBox.innerHTML = "";
    signUpTitleElement.textContent = "Sign Up";
    signUpTitleBox.appendChild(signUpTitleElement);
    ///////////////////////////////////////////////////////////
    //Elements**
    //User Input
    const userBox = document.getElementById("userBox");
    const userTextElement = document.createElement("p");
    userBox.appendChild(userTextElement);
    userTextElement.textContent = "User:";
    const userInputElement = document.createElement("input");
    userInputElement.type = "text";
    userInputElement.id = "user";
    userInputElement.className="inputStyle"
    userBox.appendChild(userInputElement);
    const userError = document.createElement("div");
    userError.id = "userError";
    userBox.appendChild(userError);

    //*********Error message when no data has been entered / Sign up***********/
    //Function for errors messaje
    //user not entered
    const user = document.getElementById("user");
    errorsMessagesForInputs("userError", user, "Enter a user.");
    //**************************************************************/

    //Input repeat password
    //rePasswordBox.style.display = "flex";
    const rePasswordBox = document.getElementById("rePasswordBox");
    const elementLabel = document.createElement("label");
    elementLabel.setAttribute("for", "passwordEntered2");
    elementLabel.textContent = "Repeat password:";
    rePasswordBox.appendChild(elementLabel);
    //Create input password element
    const passwordBox2 = document.createElement("div");
    passwordBox2.id = "passwordBox2";
    passwordBox2.className = "passwordBox";
    rePasswordBox.appendChild(passwordBox2);
    //Input Password repeat
    const passwordBox2Child = document.getElementById("passwordBox2");
    const elementInputPassword = document.createElement("input");
    elementInputPassword.type = "password";
    elementInputPassword.id = "passwordEntered2"
    elementInputPassword.className="passwordEntered";
    passwordBox2Child.appendChild(elementInputPassword);
    //Box icon eyes
    const eyesOpen2 = document.createElement("div");
    eyesOpen2.className = "boxBtneyesOpen";
    eyesOpen2.id = "eyesOpen2";
    passwordBox2Child.appendChild(eyesOpen2);
    //Icon eyes
    const iconOpen = document.createElement("i");
    iconOpen.className = "bi bi-eye flex-center";
    const eyesOpen2Box = document.getElementById("eyesOpen2");
    eyesOpen2Box.appendChild(iconOpen);
    //Box icon eyes cloced
    const eyesCloced2 = document.createElement("div");
    eyesCloced2.id = "eyesCloced2";
    eyesCloced2.className = "boxBtneyesOpen";
    passwordBox2Child.appendChild(eyesCloced2);

    //Icon eyes cloced
    const iconCloced = document.createElement("i");
    iconCloced.className = "bi bi-eye-slash flex-center";
    const eyesCloced2Box = document.getElementById("eyesCloced2");
    eyesCloced2Box.appendChild(iconCloced);

    //Message error
    const keyError2 = document.createElement("p");
    keyError2.id = "keyError2";
    rePasswordBox.appendChild(keyError2);
    ////////////////////////////////////////////////////////

    //const eyesCloced2 = document.getElementById("eyesCloced2");
    eyesCloced2.style.display = "none";
    eyesOpen2.addEventListener("click", function () {
        eyesOpenPasswordEntered("passwordEntered2", eyesOpen2, eyesCloced2)
    })
    eyesCloced2.addEventListener("click", function () {
        eyesClocedPasswordEntered("passwordEntered2", eyesOpen2, eyesCloced2)
    })
    //Different password error message
    const passwordEntered2=document.getElementById("passwordEntered2");
    const passwordEntered = document.getElementById("passwordEntered");//Password 1

    passwordBox2.addEventListener("input", function(){
        if(passwordEntered2.value!=passwordEntered.value){
            const keyError2=document.getElementById("keyError2");
            keyError2.textContent="Different passwords.";
            keyError2.className="errorMessage";
        } else {
            keyError2.innerHTML="";
        }
    })
    ////////////////////////////////////////////////////////
    //Btn Send Value
    // Change the value of the login button to "SignUp"
    sendBtn.value = "SignUp";
    /////////////////////////////////////////////////////////
    //boton signUp-login
    btnSignUp.style.display = "none";
    btnlogin.style.display = "flex"
})

//Btn login sesion
const loginBtnBoxIcon = document.getElementById("loginBtnBoxIcon");
loginBtnBoxIcon.addEventListener("click", function () {
    loginSes = true;
    signleSes = false;
    //Border Box Sesion
    const boxSesion = document.getElementById("boxSesion");
    boxSesion.style.border = "none";

    //Title signUp
    const signUpTitleBox = document.getElementById("title");
    const signUpTitleElement = document.createElement("h2");
    signUpTitleBox.innerHTML = "";
    signUpTitleElement.textContent = "Login";
    signUpTitleBox.appendChild(signUpTitleElement);

    //button login-signUp
    btnSignUp.style.display = "flex";
    btnlogin.style.display = "none"

    /////////////////////////////////////////////////////////
    //Input User removed
    const userBox = document.getElementById("userBox");
    userBox.innerHTML = "";

    //Input repeat password removed
    const rePasswordBox = document.getElementById("rePasswordBox");
    rePasswordBox.innerHTML = "";

    /////////////////////////////////////////////////////////

    //Btn Send Value
    // Cambia el valor del botón de envío a "Login"
    sendBtn.value = "Login";

})