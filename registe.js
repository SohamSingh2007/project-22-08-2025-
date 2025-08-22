// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC64IVQh13WplDDX-clQ1RjaUg_X1MJvcE",
  authDomain: "fieldproject-21f1d.firebaseapp.com",
  projectId: "fieldproject-21f1d",
  storageBucket: "fieldproject-21f1d.firebasestorage.app",
  messagingSenderId: "211444513819",
  appId: "1:211444513819:web:28b909dc140cac64944cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submit
const signupForm = document.getElementById("loginForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href = "index.html"; // redirect
    })
    .catch((error) => {
      alert(error.message);
    });
});
