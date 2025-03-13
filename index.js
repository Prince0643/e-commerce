const modal = document.getElementById("login-modal-container");
const signupmodal = document.getElementById("signup-modal-container");
const signupbtn = document.getElementById("sign-up-btn");
const loginbtn = document.getElementById("log-in-btn");
const lgnclosebtn = document.getElementById("login-close-btn");
const sgnpclosebtn = document.getElementById("signup-close-btn");

loginbtn.onclick = function () {
    modal.style.display = "block";
}

signupbtn.onclick = function () {
    signupmodal.style.display = "block";
}

lgnclosebtn.onclick = function () {
    modal.style.display = "none";
}

sgnpclosebtn.onclick = function () {
    signupmodal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal || event.target == signupmodal) {
        modal.style.display = "none";
        signupmodal.style.display = "none";
    }
}