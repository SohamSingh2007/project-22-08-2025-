const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function toggleForms() {
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}

// Login validation
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // if(email && password) {
  //   alert("Login successful with email: " + email);
  // } else {
  //   alert("Please fill in all fields");
  // }
});

// Signup validation
signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if(password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if(name && email && password) {
    alert("Signup successful for: " + name);
    toggleForms(); // Switch back to login form
  } else {
    alert("Please fill in all fields");
  }
});

// NEW: Show/Hide Password function
function togglePassword(inputId, eyeIcon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}