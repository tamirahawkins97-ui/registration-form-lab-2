# registration-form-lab-2
# Interactive Registration Form

## Overview

The **Interactive Registration Form** is a responsive web application built with **HTML**, **CSS**, and **JavaScript** that demonstrates client-side form validation, real-time user feedback, and Local Storage persistence. The application validates user input as it is entered, displays custom error messages, and stores valid registration data locally in the browser.

---

## Features

* **Real-Time Form Validation**

  * Username validation with length and pattern requirements.
  * Gmail-only email validation.
  * Password length validation.
  * Live password confirmation matching.

* **Custom Error Handling**

  * Displays descriptive error messages beneath each input.
  * Highlights invalid fields with a red border.
  * Prevents form submission until all fields are valid.

* **Local Storage Integration**

  * Saves validated username, email, and password to Local Storage.
  * Automatically pre-fills the username field when the page reloads.

* **Responsive User Interface**

  * Clean and centered registration card.
  * Background image styling.
  * Simple and accessible form layout.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Local Storage API
* HTML5 Constraint Validation API

---

## Validation Rules

### Username

* Required
* Must be between **8–15 characters**
* Must end with an underscore (`_`)
* Only letters and numbers are allowed before the underscore

Example:

```text
Tamira12_
```

---

### Email

* Required
* Must be a valid Gmail address

Example:

```text
example@gmail.com
```

---

### Password

* Required
* Minimum length: **8 characters**
* Maximum length: **15 characters**

---

### Confirm Password

* Required
* Must exactly match the password field

---

## Project Structure

```text
Interactive-Registration-Form/
│
├── index.html
├── styles.css
├── script.js
└── additional-images/
    └── 11.png
```

---

## How It Works

1. The page loads and checks Local Storage for a previously saved username.
2. As the user types, each field is validated in real time.
3. Invalid fields receive:

   * A red border
   * A custom error message
4. When the **Register** button is clicked:

   * All fields are validated again.
   * Valid data is saved to Local Storage.
   * Password confirmation is verified.
5. If every validation passes, the user receives a successful registration message.

---

## JavaScript Concepts Demonstrated

* DOM Selection
* Event Listeners
* Arrow Functions
* Form Validation
* HTML5 Constraint Validation API
* Conditional Logic
* Local Storage
* Input Event Handling
* Preventing Default Form Submission
* Dynamic DOM Manipulation

---

## Future Improvements

* Password strength meter
* Show/Hide password toggle
* Success page after registration
* Ability to clear stored registration data
* Dark mode support
* Improved mobile responsiveness
* Store user data as an object using JSON instead of individual Local Storage keys

---

## Learning Objectives

This project demonstrates how to:

* Build an accessible HTML form
* Apply custom client-side validation
* Provide immediate feedback during user input
* Persist data using Local Storage
* Organize JavaScript into logical sections
* Improve user experience through interactive validation

---

## Author

**Tamira Hawkins**

Software Engineering Student | UX Designer

This project was created as part of a JavaScript form validation exercise to strengthen skills in DOM manipulation, event handling, browser storage, and client-side validation.
