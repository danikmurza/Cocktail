localStorage.setItem("attempts", 0);

// storing register data: userName and password

export function store(userName, password) {

  if (!userName || !password) {
    localStorage.clear();
    return;
  }

  const arrayOfValidationErrors = validatePassword(password);

  if (arrayOfValidationErrors.length > 0) {
    if (arrayOfValidationErrors.length > 0) {
      alert(arrayOfValidationErrors.join("\n"));
    }
    localStorage.clear();
    return;
  }

  localStorage.setItem("userName", userName);
  localStorage.setItem("password", password);


}

// checking data in the local storage
export function check() {
  // event.preventDefault();

  let attempts = Number(localStorage.getItem("attempts"));


  // stored data from the register-form
  const storedUserName = localStorage.getItem("userName");
  const storedPassword = localStorage.getItem("password");

  // entered data from the login-form
  const logInName = document.getElementById("logInName");
  const logInPassword = document.getElementById("logInPassword");

  // check if stored data from register-form is equal to data from login form
  if (
    logInName.value !== storedUserName ||
    logInPassword.value !== storedPassword
  ) {
    attempts++;
    localStorage.setItem("attempts", attempts);

    if (attempts > 3) {
      alert("too many attempts try later");
      return;
    }

    alert("ERROR");
  } else {
    localStorage.setItem("attempts", 0);
    localStorage.setItem("loginPage", 1)
    document.getElementById('login-form').style.display = "none"
    alert("You are loged in.");
  }
}

export function enableButton(button, userName, password) {
  if (!userName || !password) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function validatePassword(password) {
  // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
  // Check length - should be longer that 8 characters
  // Should have at least one capital letter, one number, one special character

  const errors = [];
  if (password.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }
  if (password.search(/[!#$%&?"]/) < 0) {
    errors.push("Your password must contain at least one special character");
  }

  return errors;
}

export function displayPassword() {
  logInPassword.type = "text";
}

export function hidePassword() {
  logInPassword.type = "password";
}
