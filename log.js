// Function to switch between login and signup forms
function toggleForm(formType) {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");

    if (formType === 'login') {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    } else {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    }
}

// Show login form when "Signup" link is clicked
document.getElementById('showLoginLink').addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm('login');
});

// Show signup form when "Login" link is clicked
document.getElementById('showSignupLink').addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm('signup');
});

// Initialize the default form
toggleForm('login');
