// ==========================================
// 1. DOM ELEMENTS & CONSTANTS
// ==========================================
// Container form 
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

// Local Storage saved entry 
const USERNAME_KEY = "saved-username";


// ==========================================
// 2. HELPER FUNCTIONS (Pure Data Getters)
// ==========================================
// FIX #2: Capitalized 'getSavedUsername' to match line 35
const getSavedUsername = () => {
  if (typeof window !== "undefined") {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    return savedUsername || "";
  }
  return ""; // Default, or if window is not defined
}; 


// ==========================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================

// A. Pre-fill data silently on page load
userNameInput.value = getSavedUsername();

// B. Real-time typing validation
userNameInput.addEventListener("input", (event) => {
  if (!userNameInput.checkValidity()) {
    userNameInput.classList.add("error-border"); 

    if (userNameInput.validity.valueMissing) {
      usernameError.textContent = "Username is required!";
    } else if (userNameInput.validity.tooShort) {
      usernameError.textContent = "Username is too short!";
    } else if (userNameInput.validity.patternMismatch) {
      usernameError.textContent = "Must include an underscore!";
    }
  } else {
    userNameInput.classList.remove("error-border"); 
    usernameError.textContent = ""; // Clear error when valid
  }
});

// C. Safe whitespace cleanup on focus loss 
userNameInput.addEventListener("blur", () => {
  userNameInput.value = userNameInput.value.trim();
});

// D. Attach form submit listener
containerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userNameInput.checkValidity()) {
    // Save trimmed username on submit
    const cleanUsername = userNameInput.value.trim();
    localStorage.setItem(USERNAME_KEY, cleanUsername);
  } else {
    userNameInput.classList.add("error-border");
  }
});