let signUp = document.getElementsByClassName("sign_up")[0];
let signUp2 = document.getElementsByClassName("sign_up")[1];
let logIn = document.getElementsByClassName("log_in")[0];



function loadSignUp() {
    window.location.replace("index2.html");
}

function loadLogIn() {
    window.location.replace("index3.html");
}


signUp.addEventListener("click", () => {
    loadSignUp();
})
signUp2.addEventListener("click", () => {
    loadSignUp();
})
logIn.addEventListener("click", () => {
    loadLogIn();
})




