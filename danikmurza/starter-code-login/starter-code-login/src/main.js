// import "./index.html";
// import "./main.css";

// import _ from "lodash";

import {
    store,
    check,
    enableButton,
    displayPassword,
    hidePassword,
} from "./utils";
// userName and password fields

// TODO: refactor code to prevent repeating myself
// register button and register field
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const registerButton = document.getElementById("rgstr_btn");

document.getElementById('login-form').style.display = "none"

let loginPage = document.getElementById('login-page')
loginPage.style.display = "none"

userName.addEventListener("change", enableRegisterButton);
password.addEventListener("change", enableRegisterButton);

function enableRegisterButton() {
    enableButton(registerButton, userName.value, password.value);
}

// login button and login field
const logInUserName = document.getElementById("logInName");
const logInPassword = document.getElementById("logInPassword");

const loginButton = document.getElementById("login_btn");

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

// let reg = document.getElementById('sing-up-form')
// let log = document.getElementById('login-form')
// let logPage = document.getElementById('login-page')
// switch (userName && logPage) {
//   case userName.length > 0 && loginPage === true:
//     reg.style.display = "none"
//     log.style.display = "none"
//     logPage.style.display = "block"
//     break
//   case userName.length > 0:
//     reg.style.display = "none"
//     log.style.display = "block"
//         break
//   case userName.length === undefined:
//     log.style.display = "none"
//     reg.style.display = "block"
//         break
//
// }

console.log(localStorage.getItem('loginPage'))
if (localStorage.getItem('loginPage') !== null) {

    document.getElementById('login-page').style.display = "block"
  document.getElementById('login-form').style.display = "none"
  document.getElementById('sing-up-form').style.display = "none"
}
if (localStorage.getItem('userName').length > 0) {
    document.getElementById('sing-up-form').style.display = "none"
    document.getElementById('login-form').style.display = "block"
}

if (localStorage.getItem('userName').length === undefined) {
    document.getElementById('login-form').style.display = "none"
    document.getElementById('sing-up-form').style.display = "block"
}




const iconBtn = document.querySelector(".icon");

// iconBtn.addEventListener("mousedown", displayPassword);
// iconBtn.addEventListener("mouseup", hidePassword);
