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

// Local Storage saved keys (Exclude password for security)
const USERNAME_KEY = "saved-username";
const EMAIL_KEY = "saved-email";


// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

// Getter function for pre-filling stored data
const getSavedUsername = () => {
  return localStorage.getItem(USERNAME_KEY) || "";
};

// Getter function for pre-filling stored email
const getSavedEmail = () => {
  return localStorage.getItem(EMAIL_KEY) || "";
};


// ==========================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================

// Pre-fill inputs if found in LocalStorage
userNameInput.value = getSavedUsername();
emailInput.value = getSavedEmail();

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

  // 1. Username Validation & Storage
  if (userNameInput.checkValidity()) {
    userNameInput.classList.remove("error-border");
    usernameError.textContent = "";
    localStorage.setItem(USERNAME_KEY, userNameInput.value.trim());
  } else {
    isFormValid = false;
    userNameInput.classList.add("error-border");
    if (userNameInput.validity.valueMissing) {
      usernameError.textContent = "Username is required!";
    } else if (userNameInput.validity.tooShort) {
      usernameError.textContent = "Username is too short!";
    } else if (userNameInput.validity.patternMismatch) {
      usernameError.textContent = "Must include an underscore at the end!";
    }
  }

  // 2. Email Validation & Storage
  if (emailInput.checkValidity()) {
    emailInput.classList.remove("error-border");
    emailError.textContent = "";
    localStorage.setItem(EMAIL_KEY, emailInput.value.trim());
  } else {
    isFormValid = false;
    emailInput.classList.add("error-border");
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Email is required!";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email!";
    } else if (emailInput.validity.patternMismatch) {
      emailError.textContent = "Please enter a valid Gmail email!";
    }
  }

  // 3. Password Validation (No localStorage saving)
  if (passwordInput.checkValidity()) {
    passwordInput.classList.remove("error-border");
    passwordError.textContent = "";
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
    console.log("All fields valid! Non-sensitive data persisted to LocalStorage.");
    alert("Registration successful!");
  }
});