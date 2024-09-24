// Set the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Optional: Handle form submission (for demonstration)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Thank you for your message!");
});
