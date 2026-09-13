// Login Page Script
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = loginForm.querySelector("input[type='text']").value.trim();
    const password = loginForm.querySelector("input[type='password']").value.trim();

    if (username === "" || password === "") {
      alert("⚠️ Please fill in both Username and Password.");
      return;
    }

    // Example check (replace with backend validation later)
    if (username === "admin" && password === "1234") {
      alert("✅ Login successful! Redirecting...");
      window.location.href = "dashboard.html"; // redirect to dashboard
    } else {
      alert("❌ Invalid credentials. Try again.");
    }
    // Google login button handling
  googleBtn.addEventListener("click", function () {
    // For now, redirect to Google homepage
    // Later replace with actual OAuth endpoint
    window.location.href = "https://www.google.com/signin";
  });
});
