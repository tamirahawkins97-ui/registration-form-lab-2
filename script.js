// ==========================================
// 1. DOM ELEMENTS & CONSTANTS
// ==========================================
const containerForm = document.getElementById("registrationForm");

// Input elements 
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error Messages 
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Local Storage saved keys
const USERNAME_KEY = "saved-username";
const EMAIL_KEY = "saved-email";
const PASSWORD_KEY = "saved-password";


// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================
const getSavedUsername = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(USERNAME_KEY) || "";
  }
  return ""; 
}; 


// ==========================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================

// Pre-fill username if found in LocalStorage
userNameInput.value = getSavedUsername();

// Real-time typing validation: Username
userNameInput.addEventListener("input", () => {
  if (!userNameInput.checkValidity()) {
    userNameInput.classList.add("error-border"); 

    if (userNameInput.validity.valueMissing) {
      usernameError.textContent = "Username is required!";
    } else if (userNameInput.validity.tooShort) {
      usernameError.textContent = "Username is too short!";
    } else if (userNameInput.validity.patternMismatch) {
      usernameError.textContent = "Must include an underscore at the end!";
    }
  } else {
    userNameInput.classList.remove("error-border"); 
    usernameError.textContent = ""; 
  }
});

// Real-time typing validation: Email
emailInput.addEventListener("input", () => {
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("error-border"); 

    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Email is required!";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email!";
    } else if (emailInput.validity.patternMismatch) {
      emailError.textContent = "Please enter a valid Gmail email!";
    }
  } else {
    emailInput.classList.remove("error-border"); 
    emailError.textContent = ""; 
  }
});

// Real-time typing validation: Password
passwordInput.addEventListener("input", () => {
  if (!passwordInput.checkValidity()) {
    passwordInput.classList.add("error-border"); 

    if (passwordInput.validity.valueMissing) {
      passwordError.textContent = "Password is required!";
    } else if (passwordInput.validity.tooShort) {
      passwordError.textContent = "Password is too short!";
    }
  } else {
    passwordInput.classList.remove("error-border"); 
    passwordError.textContent = ""; 
  }

  // Sync confirm password error if user updates main password
  if (confirmPasswordInput.value.length > 0) {
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.classList.add("error-border");
      confirmPasswordError.textContent = "Passwords do not match!";
    } else {
      confirmPasswordInput.classList.remove("error-border");
      confirmPasswordError.textContent = "";
    }
  }
});

// Real-time typing validation: Confirm Password
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.classList.add("error-border");
    confirmPasswordError.textContent = "Passwords do not match!";
  } else {
    confirmPasswordInput.classList.remove("error-border");
    confirmPasswordError.textContent = "";
  }
});

// Attach form submit listener
containerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  // 1. Username Validation
  if (userNameInput.checkValidity()) {
    localStorage.setItem(USERNAME_KEY, userNameInput.value.trim());
  } else {
    isFormValid = false;
    userNameInput.classList.add("error-border");
    if (userNameInput.validity.valueMissing) {
      usernameError.textContent = "Username is required!";
    } else if (userNameInput.validity.patternMismatch) {
      usernameError.textContent = "Must include an underscore at the end!";
    }
  }

  // 2. Email Validation
  if (emailInput.checkValidity()) {
    localStorage.setItem(EMAIL_KEY, emailInput.value.trim());
  } else {
    isFormValid = false;
    emailInput.classList.add("error-border");
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Email is required!";
    } else if (emailInput.validity.patternMismatch) {
      emailError.textContent = "Please enter a valid Gmail email!";
    }
  }

  // 3. Password Validation
  if (passwordInput.checkValidity()) {
    localStorage.setItem(PASSWORD_KEY, passwordInput.value.trim());
  } else {
    isFormValid = false;
    passwordInput.classList.add("error-border");
    if (passwordInput.validity.valueMissing) {
      passwordError.textContent = "Password is required!";
    } else if (passwordInput.validity.tooShort) {
      passwordError.textContent = "Password is too short!";
    }
  } 

  // 4. Confirm Password Match Check
  if (!confirmPasswordInput.value || confirmPasswordInput.value !== passwordInput.value) {
    isFormValid = false;
    confirmPasswordInput.classList.add("error-border");
    confirmPasswordError.textContent = "Passwords do not match!";
  } else {
    confirmPasswordInput.classList.remove("error-border");
    confirmPasswordError.textContent = "";
  }

  // 5. Final Submit Action
  if (isFormValid) {
    console.log("All fields valid! Data persisted to LocalStorage.");
    alert("Registration successful!");
  }
});