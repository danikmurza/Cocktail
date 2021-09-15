// import "./index.html";
// import "./main.css";

// import _ from "lodash";

import {
    store,
    check,
    enableButton,
    out,
    displayPassword,
    hidePassword,
} from "./utils";
// userName and password fields

// TODO: refactor code to prevent repeating myself
// register button and register field
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const registerButton = document.getElementById("rgstr_btn");
let reg = document.getElementById('sing-up-form')
let log = document.getElementById('login-form')
let logPage = document.getElementById('login-page')

userName.addEventListener("change", enableRegisterButton);
password.addEventListener("change", enableRegisterButton);

function enableRegisterButton() {
    enableButton(registerButton, userName.value, password.value);
}

// login button and login field
const logInUserName = document.getElementById("logInName");
const logInPassword = document.getElementById("logInPassword");

const loginButton = document.getElementById("login_btn");
const logoutButton = document.getElementById("logout_btn");
const modal = document.getElementById("modal");

logInUserName.addEventListener("change", enableLogInButton);
logInPassword.addEventListener("change", enableLogInButton);

function enableLogInButton() {
    enableButton(loginButton, logInUserName.value, logInPassword.value);
}

function tran() {
    store(userName.value, password.value)
}

// logic for accessing local storage
registerButton.addEventListener("click", tran);
loginButton.addEventListener("click", check);
logoutButton.addEventListener("click", out);



reg.style.display = "block"
log.style.display = "none"
logPage.style.display = "none"

// console.log(localStorage.getItem('userName') === null)

if (localStorage.getItem('userName') !== null) {
    reg.style.display = "none"
    log.style.display = "block"
    logPage.style.display = "none"
}

if (localStorage.getItem('userName') === undefined) {
    reg.style.display = "block"
    log.style.display = "none"
    logPage.style.display = "none"
}
if (localStorage.getItem('loginPage') === "open") {
    reg.style.display = "none"
    log.style.display = "none"
    logPage.style.display = "block"
}




const iconBtn = document.querySelector(".icon");

// iconBtn.addEventListener("mousedown", displayPassword);
// iconBtn.addEventListener("mouseup", hidePassword);
