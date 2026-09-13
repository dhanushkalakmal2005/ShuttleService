// Signup Page Script
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = signupForm.querySelector("input[type='text']").value.trim();
    const email = signupForm.querySelector("input[type='email']").value.trim();
    const password = signupForm.querySelector("input[type='password']").value;
    const confirmPassword = signupForm.querySelectorAll("input[type='password']")[1].value;

    // Validation
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("⚠️ All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("⚠️ Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match.");
      return;
    }

    // Success
    alert("✅ Signup successful! Redirecting to login...");
    window.location.href = "login.html"; // redirect back to login
  });
});
