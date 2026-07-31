//Container form 
const containerForm = document.getElementById("registrationForm");
// Input elements 
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
//Error Messages 
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
//Local Storage saved entry 
USERNAME_KEY = "saved-username";

const getsavedUsername = () => {
    if (typeof window !== "undefined") {
        const savedUsername = localStorage.getItem(USERNAME_KEY);
        return  savedUsername || "";
    }
    return ""; // Default, or if window is not defined
}
