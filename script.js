// Simple form validation (if needed)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting
    alert('Form submitted successfully!');
});
