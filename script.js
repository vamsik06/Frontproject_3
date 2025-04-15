// Get the form
const form = document.getElementById('registerForm');

// When form is submitted
form.addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();
    
    // Get form elements
    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const country = document.getElementById('country');
    const terms = document.getElementById('terms');
    
    // Get message elements
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');
    
    // Hide both messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.display = 'block';
        return;
    }
    
    // Check if any required field is empty
    if (!name.value || !email.value || !password.value || 
        !confirmPassword.value || !country.value || !terms.checked) {
        errorMessage.textContent = "Please enter all required details!";
        errorMessage.style.display = 'block';
        return;
    }
    
    // Check name pattern
    if (!name.checkValidity()) {
        errorMessage.textContent = name.title;
        errorMessage.style.display = 'block';
        return;
    }
    
    // Check email pattern
    if (!email.checkValidity()) {
        errorMessage.textContent = email.title;
        errorMessage.style.display = 'block';
        return;
    }
    
    // Check password pattern
    if (!password.checkValidity()) {
        errorMessage.textContent = password.title;
        errorMessage.style.display = 'block';
        return;
    }
    
    // Check phone pattern if provided
    if (phone.value && !phone.checkValidity()) {
        errorMessage.textContent = phone.title;
        errorMessage.style.display = 'block';
        return;
    }
    
    // If all validations pass
    successMessage.style.display = 'block';
}); 