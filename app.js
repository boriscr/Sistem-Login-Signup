let userReg = "boris"; //test user
let passwordEnteredReg = 123; //test password

let currentSession = "login"; // "login" o "signup"

//Selected Inputs and Button
const email = document.getElementById("emailInput"); //email
const passwordEntered = document.getElementById("passwordEntered");//Password 1
const sendBtn = document.getElementById("sendBtn");  //Button Send
//Buttons login and signUp on start
const btnlogin = document.getElementById("loginBtnBoxIcon");
btnlogin.style.display = "none";//Btn loguin
const btnSignUp = document.getElementById("signupBtnBoxIcon");
btnSignUp.style.display = "flex";//Btn Sing up

//*********Title change login-singup******************************/
function titleChangeLoginSingup(title) {
    const signUpTitleBox = document.getElementById("title");
    const signUpTitleElement = document.createElement("h2");
    signUpTitleBox.innerHTML = "";
    signUpTitleElement.textContent = title;
    signUpTitleBox.appendChild(signUpTitleElement);
}

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
///////////////////////////////////////////////////////////
//Btn eyesOpenIcon-No eyesOpenIcon passwordEntered
//eyesOpenIcon - do not eyesOpenIcon password
const eyesOpenIcon = document.getElementById("eyesOpenIcon");
const eyesClocedIcon = document.getElementById("eyesClocedIcon");
eyesClocedIcon.style.display = "none";

function eyesOpenIconPasswordEntered(name, eyesOpenIcon, eyesClocedIcon) {
    eyesOpenIcon.style.display = "none";
    eyesClocedIcon.style.display = "flex";
    const inputPasswordEntered1 = document.getElementById(name).type = "text";
}
function eyesClocedIconPasswordEntered(name, eyesOpenIcon, eyesClocedIcon) {
    eyesOpenIcon.style.display = "flex";
    eyesClocedIcon.style.display = "none";
    const inputPasswordEntered1 = document.getElementById(name).type = "password";
}
//Input password enter 1 loguin
//icon eyes open 
eyesOpenIcon.addEventListener("click", function () {
    eyesOpenIconPasswordEntered("passwordEntered", eyesOpenIcon, eyesClocedIcon)
})
//icon eyes cloced
eyesClocedIcon.addEventListener("click", function () {
    eyesClocedIconPasswordEntered("passwordEntered", eyesOpenIcon, eyesClocedIcon)
})

////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
//Btn signUpTitle
const signupBtnBoxIcon = document.getElementById("signupBtnBoxIcon");
signupBtnBoxIcon.addEventListener("click", function () {
    currentSession = "signup";

    //Border Box Sesion
    const boxSesion = document.getElementById("boxSesion");
    boxSesion.style.border = "3px solid #07212779";

    //Title signUp
    titleChangeLoginSingup("Sign Up");

    ///////////////////////////////////////////////////////////
    //Elements**
    //User Input
    const userBox = document.getElementById("userBox");
    userBox.innerHTML = `<label for="user">User: </label>
                        <input type="text" id="user" class="inputStyle">
                        <p id="userError"></p>`;

    //*********Error message when no data has been entered / Sign up***********/
    //Function for errors messaje
    //user not entered
    const user = document.getElementById("user");
    errorsMessagesForInputs("userError", user, "Enter a user.");
    //**************************************************************/

    //Input repeat password
    const rePasswordBox = document.getElementById("rePasswordBox");
    rePasswordBox.innerHTML = `<label for="passwordEntered2">Repeat password:</label>
                            <div id="passwordBox2" class="passwordBox">
                            <input type="password" id="passwordEntered2" class="passwordEntered">
                            <div id="eyesOpenIcon2" class="boxBtneyesOpenIcon">
                            <i class="bi bi-eye flex-center"></i>
                            </div>
                            <div id="eyesClocedIcon2" class="boxBtneyesOpenIcon">
                            <i class="bi bi-eye-slash flex-center"></i>
                            </div>
                            </div>
                            <p id="keyError2"></p>`;
    ////////////////////////////////////////////////////////

    //const eyesClocedIcon2 = document.getElementById("eyesClocedIcon2");
    const eyesClocedIcon2 = document.getElementById("eyesClocedIcon2");
    const eyesOpenIcon2 = document.getElementById("eyesOpenIcon2");

    eyesClocedIcon2.style.display = "none";
    eyesOpenIcon2.addEventListener("click", function () {
        eyesOpenIconPasswordEntered("passwordEntered2", eyesOpenIcon2, eyesClocedIcon2)
    })
    eyesClocedIcon2.addEventListener("click", function () {
        eyesClocedIconPasswordEntered("passwordEntered2", eyesOpenIcon2, eyesClocedIcon2)
    })
    //Different password error message
    const passwordEntered2 = document.getElementById("passwordEntered2");
    const passwordEntered = document.getElementById("passwordEntered");//Password 1
    passwordEntered2.addEventListener("input", function () {
        if (passwordEntered2.value != passwordEntered.value) {
            const keyError2 = document.getElementById("keyError2");
            keyError2.textContent = "Different passwords.";
            keyError2.className = "errorMessage";
        } else {
            keyError2.innerHTML = "";
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

const user = document.getElementById("user");
sendBtn.addEventListener("click", function () {
    const incompleteError = document.getElementById("incompleteError");
    const passwordEntered2 = document.getElementById("passwordEntered2");
    //Btn Send

    if (email.value == "" || passwordEntered.value == "" && currentSession == "login") {
        incompleteError.textContent = "Antes de continuar, complete el formulario.";
        incompleteError.className = "errorMessage";
    } else {
        incompleteError.innerHTML = "";
    }
    if (user.value == "" || email.value == "" || passwordEntered.value == "" || passwordEntered2.value == "" && currentSession == "signup") {
        incompleteError.textContent = "Antes de continuar, complete el formulario.";
        incompleteError.className = "errorMessage";
    } else {
        incompleteError.innerHTML = "";
    }
})

//Btn login sesion
const loginBtnBoxIcon = document.getElementById("loginBtnBoxIcon");
loginBtnBoxIcon.addEventListener("click", function () {
    currentSession = "login";

    //Border Box Sesion
    const boxSesion = document.getElementById("boxSesion");
    boxSesion.style.border = "none";

    //Title signUp
    titleChangeLoginSingup("Login");

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