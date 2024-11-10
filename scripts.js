// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

// Booking Form Submission (Basic Example)
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple form validation or AJAX submission can be added here
        alert('Your booking has been submitted successfully!');
        bookingForm.reset();
    });
}

// Login Form Submission (Basic Example)
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation
        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Here you can add AJAX to send data to the server
        // For demonstration, we'll just show an alert
        alert('Login successful!');

        // Optionally, redirect to a dashboard or home page
        // window.location.href = 'dashboard.html';
        
        // Reset the form
        loginForm.reset();
    });
}

// Forgot Password Form Submission (Basic Example)
const forgotPasswordForm = document.getElementById('forgot-password-form');

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form value
        const email = document.getElementById('email').value.trim();

        // Basic validation
        if (email === '') {
            alert('Please enter your email address.');
            return;
        }

        // Here you can add AJAX to send data to the server
        // For demonstration, we'll just show an alert
        alert('A password reset link has been sent to ' + email + '.');

        // Optionally, redirect to the login page
        // window.location.href = 'login.html';
        
        // Reset the form
        forgotPasswordForm.reset();
    });
}
